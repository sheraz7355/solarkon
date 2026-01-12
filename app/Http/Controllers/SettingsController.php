<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    // 1. GET: Fetch settings for the Admin Form (Axios)
    public function getSettings()
    {
        $settings = Setting::all()->pluck('value', 'key');
        return response()->json($settings);
    }

    public function updateSettings(Request $request)
    {
        // Allow any field to be saved
        $data = $request->all();

        foreach ($data as $key => $value) {
            // Only save keys that are strings (avoids internal React objects)
            if (is_string($key)) {
                Setting::updateOrCreate(
                    ['key' => $key],
                    ['value' => $value]
                );
            }
        }

        return response()->json(['message' => 'Settings saved successfully!']);
    }
}