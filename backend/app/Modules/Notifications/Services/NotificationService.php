<?php

namespace App\Modules\Notifications\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

final class NotificationService
{
    public function notify(string $userId, string $type, string $title, array $payload = []): void
    {
        DB::table('notifications')->insert(['id' => (string) Str::uuid(), 'user_id' => $userId, 'type' => $type, 'title' => $title, 'payload' => json_encode($payload), 'created_at' => now(), 'updated_at' => now()]);
    }
}
