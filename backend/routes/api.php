<?php

use App\Modules\Admin\Controllers\AdminController;
use App\Modules\Applications\Controllers\ApplicationController;
use App\Modules\Auth\Controllers\AuthController;
use App\Modules\Internships\Controllers\InternshipController;
use App\Modules\Matching\Controllers\RecommendationController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->middleware(['api', 'throttle:api'])->group(function () {
    Route::post('auth/register', [AuthController::class, 'register']);
    Route::post('auth/login', [AuthController::class, 'login']);
    Route::get('internships', [InternshipController::class, 'index']);

    Route::middleware(['auth:api', 'verified'])->group(function () {
        Route::get('auth/me', [AuthController::class, 'me']);
        Route::post('auth/logout', [AuthController::class, 'logout']);
        Route::post('auth/refresh', [AuthController::class, 'refresh']);
        Route::post('internships', [InternshipController::class, 'store'])->middleware('role:company');
        Route::get('applications', [ApplicationController::class, 'index'])->middleware('role:student');
        Route::post('internships/{internship}/applications', [ApplicationController::class, 'store'])->middleware('role:student');
        Route::get('recommendations', [RecommendationController::class, 'index'])->middleware('role:student');
        Route::get('admin/analytics', [AdminController::class, 'analytics'])->middleware('role:admin');
    });
});
