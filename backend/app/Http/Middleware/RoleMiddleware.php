<?php

namespace App\Http\Middleware;

use App\Support\ApiResponse;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

final class RoleMiddleware
{
    public function handle(Request $request, Closure $next, string $role): mixed
    {
        $hasRole = DB::table('model_has_roles')
            ->where('user_id', $request->user()?->id)
            ->where('role', $role)
            ->exists();

        if (! $hasRole) {
            return ApiResponse::error('Accès non autorisé.', 403);
        }

        return $next($request);
    }
}
