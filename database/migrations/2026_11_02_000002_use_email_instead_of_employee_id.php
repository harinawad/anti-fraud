<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// For installs created before employees were identified by email.
// Fresh installs already have the email column, so this does nothing there.
return new class extends Migration
{
    public function up(): void
    {
        foreach (['course_results', 'course_surveys'] as $table) {
            if (Schema::hasColumn($table, 'employee_id')) {
                Schema::table($table, function (Blueprint $t) {
                    $t->renameColumn('employee_id', 'email');
                });
                Schema::table($table, function (Blueprint $t) {
                    $t->string('email', 190)->change(); // was 40 characters
                });
            }
        }
    }

    public function down(): void
    {
        //
    }
};
