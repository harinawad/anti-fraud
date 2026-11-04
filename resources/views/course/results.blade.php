<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>نتائج دورة النزاهة</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/course-assets/app.css?v={{ filemtime(public_path('course-assets/app.css')) }}">
<style>
  .stats{display:flex;flex-wrap:wrap;gap:12px;margin:0 0 24px}
  .stat{border:1px solid var(--line);border-radius:12px;padding:12px 18px;background:var(--surface);min-width:140px}
  .stat b{display:block;font-family:var(--f-display);font-size:1.6rem;font-variant-numeric:tabular-nums}
  .stat span{color:var(--muted);font-size:.85rem}
  .tbl{overflow-x:auto;border:1px solid var(--line);border-radius:12px;background:var(--surface);margin-bottom:28px}
  table{width:100%;border-collapse:collapse;font-size:.93rem}
  th,td{padding:10px 14px;text-align:right;border-bottom:1px solid var(--line);white-space:nowrap}
  th{font-family:var(--f-display);font-weight:600;color:var(--muted);font-size:.85rem}
  td.num{font-variant-numeric:tabular-nums}
  .pill{display:inline-block;padding:2px 10px;border-radius:99px;font-size:.8rem;font-weight:600}
  .pill.y{background:var(--good-soft);color:var(--good)} .pill.n{background:var(--bad-soft);color:var(--bad)}
  h2{font-size:1.15rem;margin:0 0 10px}
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <div>
      <div class="brand">EITMED · إدارة الالتزام</div>
      <h1>نتائج دورة النزاهة</h1>
      <p class="sub">درجة النجاح {{ $passMark }} من {{ config('course.answer_key') ? count(config('course.answer_key')) : 20 }}</p>
    </div>
    <a class="btn" href="{{ route('course.admin.export', ['key' => $adminKey], false) }}">تنزيل CSV</a>
  </header>

  @php
    $passed = $employees->where('passed', true)->count();
    $total = $employees->count();
  @endphp
  <div class="stats">
    <div class="stat"><b>{{ $total }}</b><span>موظف أدّى الاختبار</span></div>
    <div class="stat"><b>{{ $passed }}</b><span>ناجح</span></div>
    <div class="stat"><b>{{ $total - $passed }}</b><span>لم ينجح بعد</span></div>
    <div class="stat"><b>{{ $attempts->count() }}</b><span>إجمالي المحاولات</span></div>
  </div>

  <h2>أفضل نتيجة لكل موظف</h2>
  <div class="tbl"><table>
    <thead><tr><th>الاسم</th><th>البريد الإلكتروني</th><th>أفضل درجة</th><th>الحالة</th><th>الاستبيان</th><th>التاريخ</th></tr></thead>
    <tbody>
    @forelse ($employees as $r)
      <tr><td>{{ $r->name }}</td><td dir="ltr" style="text-align:right">{{ $r->email }}</td><td class="num">{{ $r->score }} / {{ $r->total }}</td>
        <td><span class="pill {{ $r->passed ? 'y' : 'n' }}">{{ $r->passed ? 'ناجح' : 'لم ينجح' }}</span></td>
        <td><span class="pill {{ $surveyed->has($r->email) ? 'y' : 'n' }}">{{ $surveyed->has($r->email) ? 'تم' : 'لم يكمل' }}</span></td>
        <td class="num">{{ $r->created_at->format('Y-m-d H:i') }}</td></tr>
    @empty
      <tr><td colspan="6">لا توجد نتائج بعد.</td></tr>
    @endforelse
    </tbody>
  </table></div>

  <h2>كل المحاولات</h2>
  <div class="tbl"><table>
    <thead><tr><th>الاسم</th><th>البريد الإلكتروني</th><th>الدرجة</th><th>الحالة</th><th>التاريخ</th></tr></thead>
    <tbody>
    @foreach ($attempts as $r)
      <tr><td>{{ $r->name }}</td><td dir="ltr" style="text-align:right">{{ $r->email }}</td><td class="num">{{ $r->score }} / {{ $r->total }}</td>
        <td><span class="pill {{ $r->passed ? 'y' : 'n' }}">{{ $r->passed ? 'ناجح' : 'لم ينجح' }}</span></td>
        <td class="num">{{ $r->created_at->format('Y-m-d H:i') }}</td></tr>
    @endforeach
    </tbody>
  </table></div>

  <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0 14px">
    <h2 style="margin:0">الاستبيان</h2>
    <a class="btn ghost" href="{{ route('course.admin.survey-export', ['key' => $adminKey], false) }}">تنزيل الاستبيان CSV</a>
  </div>
  <div class="stats">
    <div class="stat"><b>{{ $surveys->count() }}</b><span>موظف أكمل الاستبيان</span></div>
  </div>

  <div class="tbl"><table>
    <thead><tr><th>العبارة</th><th>متوسط التقييم (من ٥)</th><th>عدد الإجابات</th></tr></thead>
    <tbody>
    @foreach ($averages as $row)
      <tr><td style="white-space:normal">{{ $row['question'] }}</td>
        <td class="num">{{ $row['avg'] !== null ? number_format($row['avg'], 1) : '—' }}</td>
        <td class="num">{{ $row['count'] }}</td></tr>
    @endforeach
    </tbody>
  </table></div>

  @if (count($openQuestions))
  <h2>إجابات الأسئلة المفتوحة</h2>
  <div class="tbl"><table>
    <thead><tr><th>الاسم</th><th>البريد الإلكتروني</th>@foreach ($openQuestions as $q)<th>{{ $q }}</th>@endforeach<th>التاريخ</th></tr></thead>
    <tbody>
    @forelse ($surveys as $s)
      <tr><td>{{ $s->name }}</td><td dir="ltr" style="text-align:right">{{ $s->email }}</td>
        @foreach ($openQuestions as $i => $q)<td style="white-space:pre-wrap;min-width:220px">{{ $s->comments[$i] ?? '' }}</td>@endforeach
        <td class="num">{{ $s->updated_at->format('Y-m-d H:i') }}</td></tr>
    @empty
      <tr><td colspan="{{ count($openQuestions) + 3 }}">لا توجد إجابات بعد.</td></tr>
    @endforelse
    </tbody>
  </table></div>
  @endif
</div>
</body>
</html>
