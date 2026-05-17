<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

final class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Bind future repository interfaces here when modules become packages.
    }

    public function boot(): void
    {
        // Production bootstrapping hook for policies, observers and telemetry.
    }
}
