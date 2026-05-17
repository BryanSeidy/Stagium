<?php

namespace App\Modules\Internships\DTOs;

final readonly class InternshipData
{
    public function __construct(
        public string $title,
        public string $description,
        public string $city,
        public string $domain,
        public string $mode,
        public string $type,
        public ?int $stipend,
        public array $tags,
    ) {}

    public static function rules(): array
    {
        return [
            'title' => ['required', 'string', 'min:6', 'max:160'],
            'description' => ['required', 'string', 'min:80'],
            'city' => ['required', 'string', 'max:120'],
            'domain' => ['required', 'string', 'max:120'],
            'mode' => ['required', 'in:remote,hybrid,onsite'],
            'type' => ['required', 'in:academic,professional,pre-employment'],
            'stipend' => ['nullable', 'integer', 'min:0'],
            'tags' => ['required', 'array', 'min:1'],
            'tags.*' => ['string', 'max:40'],
        ];
    }
}
