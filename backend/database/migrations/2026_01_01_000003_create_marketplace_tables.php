<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('skills', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name')->unique();
            $table->string('category')->index();
            $table->timestamps();
        });
        Schema::create('internships', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('company_id')->index();
            $table->string('title', 160);
            $table->text('description');
            $table->string('city')->index();
            $table->string('domain')->index();
            $table->string('mode')->index();
            $table->string('type')->index();
            $table->unsignedInteger('stipend')->nullable();
            $table->jsonb('tags')->default('[]');
            $table->string('status')->default('draft')->index();
            $table->timestamp('published_at')->nullable()->index();
            $table->timestamps();
            $table->foreign('company_id')->references('id')->on('companies')->cascadeOnDelete();
        });
        Schema::create('applications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('student_id')->index();
            $table->uuid('internship_id')->index();
            $table->string('status')->default('sent')->index();
            $table->text('cover_letter')->nullable();
            $table->jsonb('documents')->default('[]');
            $table->timestamps();
            $table->unique(['student_id', 'internship_id']);
        });
        Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id')->index();
            $table->string('type')->index();
            $table->string('title');
            $table->jsonb('payload')->default('{}');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notifications');
        Schema::dropIfExists('applications');
        Schema::dropIfExists('internships');
        Schema::dropIfExists('skills');
    }
};
