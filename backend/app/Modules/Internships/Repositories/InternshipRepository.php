<?php

namespace App\Modules\Internships\Repositories;

use App\Modules\Internships\DTOs\InternshipData;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

final class InternshipRepository
{
    public function paginate(array $filters): LengthAwarePaginator
    {
        return DB::table('internships')
            ->join('companies', 'companies.id', '=', 'internships.company_id')
            ->select('internships.*', 'companies.name as company')
            ->when($filters['city'] ?? null, fn ($query, $city) => $query->where('city', 'ilike', "%{$city}%"))
            ->when($filters['domain'] ?? null, fn ($query, $domain) => $query->where('domain', 'ilike', "%{$domain}%"))
            ->when($filters['mode'] ?? null, fn ($query, $mode) => $query->where('mode', $mode))
            ->when($filters['technology'] ?? null, fn ($query, $technology) => $query->whereJsonContains('tags', $technology))
            ->where('status', 'published')
            ->latest('published_at')
            ->paginate(min((int) ($filters['per_page'] ?? 12), 50));
    }

    public function create(string $companyId, InternshipData $data): object
    {
        $id = (string) Str::uuid();
        DB::table('internships')->insert([
            'id' => $id,
            'company_id' => $companyId,
            'title' => $data->title,
            'description' => $data->description,
            'city' => $data->city,
            'domain' => $data->domain,
            'mode' => $data->mode,
            'type' => $data->type,
            'stipend' => $data->stipend,
            'tags' => json_encode($data->tags),
            'status' => 'published',
            'published_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        return DB::table('internships')->where('id', $id)->first();
    }
}
