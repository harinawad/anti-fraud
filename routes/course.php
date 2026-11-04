<?php

use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;

Route::get('/course', [CourseController::class, 'show'])->name('course.show');

Route::post('/course/results', [CourseController::class, 'store'])
    ->middleware('throttle:10,1')
    ->name('course.results.store');

Route::post('/course/survey', [CourseController::class, 'storeSurvey'])
    ->middleware('throttle:10,1')
    ->name('course.survey.store');

Route::get('/course/admin', [CourseController::class, 'results'])->name('course.admin');
Route::get('/course/admin/export', [CourseController::class, 'export'])->name('course.admin.export');
Route::get('/course/admin/survey-export', [CourseController::class, 'exportSurvey'])->name('course.admin.survey-export');
