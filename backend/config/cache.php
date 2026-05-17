<?php

return [
    'default' => env('CACHE_STORE', 'database'),
    'stores' => ['database' => ['driver' => 'database', 'table' => 'cache', 'connection' => null, 'lock_connection' => null]],
    'prefix' => env('CACHE_PREFIX', 'stagium_cache'),
];
