<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;
use App\Models\Setting; // <--- ✅ IMPORT YOUR MODEL HERE

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    // This function runs automatically on every page load
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            
            // 1. Existing Auth Logic (Don't touch)
            'auth' => [
                'user' => $request->user(),
            ],

            // 2. ✅ NEW: Global Site Settings
            // This fetches ALL settings from DB and converts them to a simple list:
            // ['phone' => '+92...', 'email' => '...', 'site_name' => '...']
            'site_settings' => Setting::all()->pluck('value', 'key'),

            // 3. Existing Ziggy Logic (Don't touch)
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}