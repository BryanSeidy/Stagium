<?php

namespace App\Modules\Internships\Controllers;

use App\Modules\Internships\DTOs\InternshipData;
use App\Modules\Internships\Services\InternshipService;
use App\Support\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

final class InternshipController extends Controller
{
    public function __construct(private readonly InternshipService $internships) {}

    public function index(Request $request)
    {
        $result = $this->internships->search($request->only(['city', 'domain', 'mode', 'technology', 'per_page']));
        return ApiResponse::success($result->items(), meta: ['pagination' => ['current_page' => $result->currentPage(), 'total' => $result->total()]]);
    }

    public function store(Request $request)
    {
        $payload = $request->validate(InternshipData::rules());
        $companyId = $request->user()->company->id;
        return ApiResponse::success($this->internships->publish($companyId, new InternshipData(...$payload)), 'Offre publiée.', 201);
    }
}
