<?php

namespace App\Modules\Admin\Controllers;

use App\Support\ApiResponse;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

final class AdminController extends Controller
{
    public function analytics()
    {
        return ApiResponse::success([
            'users' => DB::table('users')->count(),
            'companies_pending' => DB::table('companies')->where('status', 'pending')->count(),
            'published_internships' => DB::table('internships')->where('status', 'published')->count(),
            'applications' => DB::table('applications')->count(),
        ]);
    }
}
