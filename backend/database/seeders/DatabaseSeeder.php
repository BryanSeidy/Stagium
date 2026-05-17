<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

final class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        foreach ([['student', 'Étudiant'], ['company', 'Entreprise'], ['admin', 'Administrateur']] as [$name, $label]) {
            DB::table('roles')->updateOrInsert(['name' => $name], ['label' => $label]);
        }

        $adminId = (string) Str::uuid();
        DB::table('users')->updateOrInsert(['email' => 'admin@stagium.test'], ['id' => $adminId, 'name' => 'Admin Stagium', 'password' => Hash::make('Password123!'), 'email_verified_at' => now(), 'created_at' => now(), 'updated_at' => now()]);
        DB::table('model_has_roles')->updateOrInsert(['user_id' => $adminId, 'role' => 'admin']);
    }
}
