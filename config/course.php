<?php

return [
    // Index of the correct option for each final-exam question, in the same
    // order as the EXAM array in public/course-assets/app.js. Keep the two in sync.
    'answer_key' => [1, 3, 2, 1, 1, 3, 2, 1, 3, 0, 1, 1, 3, 2, 0, 1, 1, 3, 1, 0],

    'pass_mark' => 16,

    // Course feedback survey. Employees rate each statement from 1 (strongly disagree)
    // to 5 (strongly agree), then answer the open questions (optional).
    // Add, remove or reword freely. If you remove or reorder a rating statement after
    // employees have answered, older answers will line up with the wrong statement.
    'survey' => [
        'ratings' => [
            'محتوى الدورة كان واضحاً وسهل الفهم.',
            'زادت الدورة من وعيي بأنواع الاحتيال ومؤشراته.',
            'أعرف الآن كيف وأين أبلّغ عن أي شبهة احتيال.',
            'ساعدتني الأمثلة وأسئلة التحقق السريع على الفهم.',
        ],
        // Optional free-text questions, e.g. 'ما أكثر ما استفدت منه في الدورة؟'. Empty = none.
        'open' => [],
    ],

    // Open /course/admin?key=THIS_VALUE to see results. Leave empty to disable the admin page.
    'admin_key' => env('COURSE_ADMIN_KEY'),
];
