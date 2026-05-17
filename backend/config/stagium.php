<?php

return [
    'api_version' => 'v1',
    'matching' => [
        'skills_weight' => 0.55,
        'domain_weight' => 0.20,
        'location_weight' => 0.15,
        'mode_weight' => 0.10,
    ],
    'security' => [
        'access_token_ttl' => 15,
        'refresh_token_ttl' => 60 * 24 * 30,
    ],
];
