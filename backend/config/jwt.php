<?php

return [
    'secret' => env('JWT_SECRET'),
    'ttl' => (int) env('JWT_TTL', 15),
    'refresh_ttl' => (int) env('JWT_REFRESH_TTL', 43200),
    'algo' => env('JWT_ALGO', 'HS256'),
];
