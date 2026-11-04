<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>دورة النزاهة ومكافحة الاحتيال</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&display=swap">
{{-- Root-relative URLs on purpose: they keep working behind ngrok's https without mixed-content issues --}}
<link rel="stylesheet" href="/course-assets/app.css?v={{ filemtime(public_path('course-assets/app.css')) }}">
</head>
<body>
<div class="wrap">
  <header class="top">
    <div>
      <div class="brand">EITMED · حماية مكان عملنا</div>
      <h1>ثقافة النزاهة والوعي بالاحتيال</h1>
      <p class="sub">دورة تدريبية من ست وحدات واختبار نهائي و استبيان</p>
    </div>
    <div class="prog" aria-live="polite">
      <div class="lbl"><span>تقدّمك</span><span id="progTxt">0 من 7</span></div>
      <div class="bar"><i id="progBar"></i></div>
    </div>
  </header>

  <div class="layout">
    <nav class="rail" id="rail" aria-label="وحدات الدورة"></nav>
    <main id="main"></main>
  </div>
</div>
<script>
  window.COURSE_CFG = {
    submitUrl: @json(route('course.results.store', [], false)),
    surveyUrl: @json(route('course.survey.store', [], false)),
    survey: @json(config('course.survey')),
    csrf: @json(csrf_token())
  };
</script>
<script src="/course-assets/app.js?v={{ filemtime(public_path('course-assets/app.js')) }}"></script>
</body>
</html>
