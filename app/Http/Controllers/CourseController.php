<?php

namespace App\Http\Controllers;

use App\Models\CourseResult;
use App\Models\CourseSurvey;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;

class CourseController extends Controller
{
    public function show()
    {
        return view('course.show');
    }

    /**
     * Receives the employee's answers and scores them on the server,
     * so the stored result can't be faked from the browser.
     */
    public function store(Request $request): JsonResponse
    {
        $key = config('course.answer_key');

        $data = $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:120'],
            'email' => ['required', 'email', 'max:190'],
            'answers' => ['required', 'array', 'size:'.count($key)],
            'answers.*.q' => ['required', 'integer', 'min:0', 'max:'.(count($key) - 1)],
            'answers.*.a' => ['required', 'integer', 'min:0', 'max:3'],
        ]);

        $seen = [];
        $score = 0;
        foreach ($data['answers'] as $answer) {
            $q = (int) $answer['q'];
            if (isset($seen[$q])) {
                return response()->json(['message' => 'Duplicate question in answers.'], 422);
            }
            $seen[$q] = true;
            if ($key[$q] === (int) $answer['a']) {
                $score++;
            }
        }

        $result = CourseResult::create([
            'name' => trim($data['name']),
            'email' => mb_strtolower(trim($data['email'])),
            'score' => $score,
            'total' => count($key),
            'passed' => $score >= config('course.pass_mark'),
            'answers' => $data['answers'],
            'ip' => $request->ip(),
            'user_agent' => substr((string) $request->userAgent(), 0, 255),
        ]);

        return response()->json(['score' => $score, 'passed' => $result->passed]);
    }

    /**
     * Saves the course feedback survey. One per employee: resubmitting replaces it.
     */
    public function storeSurvey(Request $request): JsonResponse
    {
        $ratingCount = count(config('course.survey.ratings'));
        $openCount = count(config('course.survey.open'));

        $data = $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:120'],
            'email' => ['required', 'email', 'max:190'],
            // Extra ratings (e.g. from a page opened before a statement was removed) are ignored below
            'ratings' => ['required', 'array', 'min:'.$ratingCount, 'max:20'],
            'ratings.*' => ['required', 'integer', 'min:1', 'max:5'],
            'comments' => ['nullable', 'array', 'max:10'], // extra answers (e.g. from an older open page) are ignored below
            'comments.*' => ['nullable', 'string', 'max:2000'],
        ]);

        $comments = [];
        for ($i = 0; $i < $openCount; $i++) {
            $comments[] = trim((string) ($data['comments'][$i] ?? ''));
        }

        CourseSurvey::updateOrCreate(
            ['email' => mb_strtolower(trim($data['email']))],
            [
                'name' => trim($data['name']),
                'ratings' => array_map('intval', array_slice(array_values($data['ratings']), 0, $ratingCount)),
                'comments' => $comments,
            ],
        );

        return response()->json(['saved' => true]);
    }

    public function results(Request $request)
    {
        $this->authorizeAdmin($request);

        $attempts = CourseResult::latest()->get();

        // Best attempt per employee
        $employees = $attempts->groupBy('email')
            ->map(fn ($rows) => $rows->sortByDesc('score')->first())
            ->sortBy('name')
            ->values();

        $surveys = CourseSurvey::latest()->get();
        $ratingQuestions = config('course.survey.ratings');
        $averages = [];
        foreach ($ratingQuestions as $i => $question) {
            $values = $surveys->map(fn ($s) => $s->ratings[$i] ?? null)->filter();
            $averages[] = ['question' => $question, 'avg' => $values->avg(), 'count' => $values->count()];
        }

        return view('course.results', [
            'attempts' => $attempts,
            'employees' => $employees,
            'surveys' => $surveys,
            'surveyed' => $surveys->pluck('email')->flip(),
            'averages' => $averages,
            'openQuestions' => config('course.survey.open'),
            'passMark' => config('course.pass_mark'),
            'adminKey' => $request->query('key'),
        ]);
    }

    public function export(Request $request): StreamedResponse
    {
        $this->authorizeAdmin($request);

        $surveyed = CourseSurvey::pluck('email')->flip();

        return response()->streamDownload(function () use ($surveyed) {
            $out = fopen('php://output', 'w');
            fwrite($out, "\xEF\xBB\xBF"); // BOM so Excel shows Arabic correctly
            fputcsv($out, ['الاسم', 'البريد الإلكتروني', 'الدرجة', 'من', 'ناجح', 'أكمل الاستبيان', 'التاريخ']);
            CourseResult::latest()->each(function (CourseResult $r) use ($out, $surveyed) {
                fputcsv($out, [
                    $r->name, $r->email, $r->score, $r->total,
                    $r->passed ? 'نعم' : 'لا', $surveyed->has($r->email) ? 'نعم' : 'لا',
                    $r->created_at->format('Y-m-d H:i'),
                ]);
            });
            fclose($out);
        }, 'course-results-'.now()->format('Y-m-d').'.csv', ['Content-Type' => 'text/csv; charset=UTF-8']);
    }

    public function exportSurvey(Request $request): StreamedResponse
    {
        $this->authorizeAdmin($request);

        $ratingQuestions = config('course.survey.ratings');
        $openQuestions = config('course.survey.open');

        return response()->streamDownload(function () use ($ratingQuestions, $openQuestions) {
            $out = fopen('php://output', 'w');
            fwrite($out, "\xEF\xBB\xBF"); // BOM so Excel shows Arabic correctly
            fputcsv($out, ['الاسم', 'البريد الإلكتروني', ...$ratingQuestions, ...$openQuestions, 'التاريخ']);
            CourseSurvey::latest()->each(function (CourseSurvey $s) use ($ratingQuestions, $openQuestions, $out) {
                $ratings = array_map(fn ($i) => $s->ratings[$i] ?? '', array_keys($ratingQuestions));
                $comments = array_map(fn ($i) => $s->comments[$i] ?? '', array_keys($openQuestions));
                fputcsv($out, [$s->name, $s->email, ...$ratings, ...$comments, $s->updated_at->format('Y-m-d H:i')]);
            });
            fclose($out);
        }, 'course-survey-'.now()->format('Y-m-d').'.csv', ['Content-Type' => 'text/csv; charset=UTF-8']);
    }

    private function authorizeAdmin(Request $request): void
    {
        $adminKey = config('course.admin_key');
        $given = $request->query('key');

        abort_unless($adminKey && is_string($given) && hash_equals($adminKey, $given), 404);
    }
}
