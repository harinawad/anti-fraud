<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseResult extends Model
{
    protected $fillable = [
        'name', 'email', 'score', 'total', 'passed', 'answers', 'ip', 'user_agent',
    ];

    protected $casts = [
        'answers' => 'array',
        'passed' => 'boolean',
    ];
}
