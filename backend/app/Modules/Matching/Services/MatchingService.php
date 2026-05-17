<?php

namespace App\Modules\Matching\Services;

final class MatchingService
{
    public function score(array $student, array $internship): int
    {
        $weights = config('stagium.matching');
        $studentSkills = array_map('mb_strtolower', $student['skills'] ?? []);
        $offerSkills = array_map('mb_strtolower', $internship['tags'] ?? []);
        $skillScore = count($offerSkills) === 0 ? 0 : count(array_intersect($studentSkills, $offerSkills)) / count($offerSkills);
        $domainScore = ($student['preferred_domain'] ?? null) === ($internship['domain'] ?? null) ? 1 : 0;
        $locationScore = in_array($internship['city'] ?? null, $student['preferred_cities'] ?? [], true) ? 1 : 0;
        $modeScore = ($student['preferred_mode'] ?? null) === ($internship['mode'] ?? null) ? 1 : 0;

        return (int) round(100 * (
            $skillScore * $weights['skills_weight'] +
            $domainScore * $weights['domain_weight'] +
            $locationScore * $weights['location_weight'] +
            $modeScore * $weights['mode_weight']
        ));
    }
}
