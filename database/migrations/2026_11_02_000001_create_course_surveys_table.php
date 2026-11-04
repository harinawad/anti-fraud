<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('course_surveys', function (Blueprint $table) {
            $table->id();
            $table->string('name', 120);
            $table->string('email', 190)->unique(); // one survey per employee; resubmitting updates it
            $table->json('ratings');
            $table->json('comments');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('course_surveys');
    }
};
