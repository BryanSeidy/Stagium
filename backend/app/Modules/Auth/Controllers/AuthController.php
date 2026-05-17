<?php

namespace App\Modules\Auth\Controllers;

use App\Modules\Auth\DTOs\RegisterUserData;
use App\Modules\Auth\Services\AuthService;
use App\Support\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

final class AuthController extends Controller
{
    public function __construct(private readonly AuthService $auth) {}

    public function register(Request $request)
    {
        $payload = $request->validate(RegisterUserData::rules());
        $data = new RegisterUserData(...$payload);
        return ApiResponse::success($this->auth->register($data), 'Compte créé. Vérifiez votre email.', 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate(['email' => ['required', 'email'], 'password' => ['required', 'string']]);
        return ApiResponse::success($this->auth->login($credentials), 'Connexion réussie.');
    }

    public function me(Request $request)
    {
        return ApiResponse::success($request->user());
    }

    public function logout()
    {
        auth('api')->logout();
        return ApiResponse::success(null, 'Session terminée.');
    }

    public function refresh()
    {
        return ApiResponse::success(['access_token' => auth('api')->refresh(), 'token_type' => 'Bearer']);
    }
}
