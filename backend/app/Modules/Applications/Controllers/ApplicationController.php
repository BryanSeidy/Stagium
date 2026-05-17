<?php

namespace App\Modules\Applications\Controllers;

use App\Support\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

final class ApplicationController extends Controller
{
    public function index(Request $request)
    {
        $applications = DB::table('applications')->where('student_id', $request->user()->student->id)->latest()->paginate(15);
        return ApiResponse::success($applications->items(), meta: ['pagination' => ['total' => $applications->total()]]);
    }

    public function store(Request $request, string $internshipId)
    {
        $payload = $request->validate(['cover_letter' => ['nullable', 'string', 'max:4000'], 'documents' => ['array'], 'documents.*' => ['file', 'mimes:pdf,doc,docx', 'max:5120']]);
        $id = (string) Str::uuid();
        DB::table('applications')->insert(['id' => $id, 'student_id' => $request->user()->student->id, 'internship_id' => $internshipId, 'status' => 'sent', 'cover_letter' => $payload['cover_letter'] ?? null, 'created_at' => now(), 'updated_at' => now()]);
        return ApiResponse::success(DB::table('applications')->where('id', $id)->first(), 'Candidature envoyée.', 201);
    }
}
