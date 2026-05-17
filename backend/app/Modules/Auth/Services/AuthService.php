<?php

namespace App\Modules\Auth\Services;

use App\Modules\Auth\DTOs\RegisterUserData;
use App\Modules\Auth\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

final class AuthService
{
    public function __construct(private readonly UserRepository $users) {}

    public function register(RegisterUserData $data): array
    {
        $user = $this->users->create($data);
        return ['user' => $user, 'access_token' => auth('api')->loginUsingId($user->id), 'token_type' => 'Bearer'];
    }

    public function login(array $credentials): array
    {
        if (! $token = Auth::guard('api')->attempt($credentials)) {
            throw ValidationException::withMessages(['email' => __('Identifiants invalides.')]);
        }
        return ['user' => Auth::guard('api')->user(), 'access_token' => $token, 'token_type' => 'Bearer'];
    }
}
