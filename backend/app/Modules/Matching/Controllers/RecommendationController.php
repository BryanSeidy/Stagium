<?php

namespace App\Modules\Matching\Controllers;

use App\Modules\Matching\Services\MatchingService;
use App\Support\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

final class RecommendationController extends Controller
{
    public function __construct(private readonly MatchingService $matching) {}

    public function index(Request $request)
    {
        $student = DB::table('students')->where('user_id', $request->user()->id)->first();
        $profile = ['skills' => json_decode($student->skills ?? '[]', true), 'preferred_domain' => $student->preferred_domain, 'preferred_cities' => json_decode($student->preferred_cities ?? '[]', true), 'preferred_mode' => $student->preferred_mode];
        $offers = DB::table('internships')->where('status', 'published')->limit(25)->get()->map(function ($offer) use ($profile) {
            $payload = (array) $offer;
            $payload['tags'] = json_decode($offer->tags ?? '[]', true);
            $payload['match_score'] = $this->matching->score($profile, $payload);
            return $payload;
        })->sortByDesc('match_score')->values();

        return ApiResponse::success($offers);
    }
}
