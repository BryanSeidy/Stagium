<?php

namespace App\Modules\Auth\Repositories;

use App\Modules\Auth\DTOs\RegisterUserData;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

final class UserRepository
{
    public function create(RegisterUserData $data): object
    {
        return DB::transaction(function () use ($data) {
            $userId = (string) Str::uuid();
            DB::table('users')->insert([
                'id' => $userId,
                'name' => $data->name,
                'email' => mb_strtolower($data->email),
                'password' => Hash::make($data->password),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            DB::table('model_has_roles')->insert(['user_id' => $userId, 'role' => $data->role]);

            if ($data->role === 'student') {
                DB::table('students')->insert(['id' => (string) Str::uuid(), 'user_id' => $userId, 'headline' => 'Nouveau talent Stagium', 'created_at' => now(), 'updated_at' => now()]);
            }

            if ($data->role === 'company') {
                DB::table('companies')->insert(['id' => (string) Str::uuid(), 'owner_id' => $userId, 'name' => $data->organization ?? $data->name, 'status' => 'pending', 'created_at' => now(), 'updated_at' => now()]);
            }

            return DB::table('users')->where('id', $userId)->first(['id', 'name', 'email']);
        });
    }
}
