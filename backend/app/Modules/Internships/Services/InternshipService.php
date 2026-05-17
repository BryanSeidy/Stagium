<?php

namespace App\Modules\Internships\Services;

use App\Modules\Internships\DTOs\InternshipData;
use App\Modules\Internships\Repositories\InternshipRepository;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

final class InternshipService
{
    public function __construct(private readonly InternshipRepository $internships) {}

    public function search(array $filters): LengthAwarePaginator
    {
        return $this->internships->paginate($filters);
    }

    public function publish(string $companyId, InternshipData $data): object
    {
        return $this->internships->create($companyId, $data);
    }
}
