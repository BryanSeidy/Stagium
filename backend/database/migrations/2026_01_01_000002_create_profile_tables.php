<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id')->unique();
            $table->string('headline')->nullable();
            $table->text('bio')->nullable();
            $table->string('school')->nullable();
            $table->string('degree')->nullable();
            $table->jsonb('skills')->default('[]');
            $table->jsonb('technologies')->default('[]');
            $table->jsonb('experiences')->default('[]');
            $table->jsonb('projects')->default('[]');
            $table->string('portfolio_url')->nullable();
            $table->string('preferred_domain')->nullable();
            $table->jsonb('preferred_cities')->default('[]');
            $table->string('preferred_mode')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->index(['preferred_domain', 'preferred_mode']);
        });
        Schema::create('companies', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('owner_id');
            $table->string('name', 160);
            $table->string('logo_path')->nullable();
            $table->text('description')->nullable();
            $table->string('sector')->nullable();
            $table->string('city')->nullable();
            $table->string('website')->nullable();
            $table->string('status')->default('pending')->index();
            $table->timestamps();
            $table->foreign('owner_id')->references('id')->on('users')->cascadeOnDelete();
        });
        Schema::create('cvs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('student_id')->index();
            $table->string('file_path');
            $table->jsonb('parsed_payload')->nullable();
            $table->integer('ats_score')->nullable();
            $table->timestamps();
        });
        Schema::create('portfolios', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('student_id')->index();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('url')->nullable();
            $table->jsonb('technologies')->default('[]');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('portfolios');
        Schema::dropIfExists('cvs');
        Schema::dropIfExists('companies');
        Schema::dropIfExists('students');
    }
};
