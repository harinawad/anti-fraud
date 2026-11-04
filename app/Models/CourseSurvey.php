<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseSurvey extends Model
{
    protected $fillable = ['name', 'email', 'ratings', 'comments'];

    protected $casts = [
        'ratings' => 'array',
        'comments' => 'array',
    ];
}
