<?php

use Illuminate\Support\Facades\Route;

Route::redirect('/', '/course');

require __DIR__.'/course.php';
