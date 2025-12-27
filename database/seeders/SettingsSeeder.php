<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingsSeeder extends Seeder
{
    public function run()
    {
        $settings = [
            // General
            ['key' => 'site_name', 'value' => 'SOLARKON'],
            ['key' => 'footer_description', 'value' => 'Powering a brighter, greener Pakistan with premium solar energy solutions for residential, commercial, and industrial needs.'],
            
            // Contact Info
            ['key' => 'address', 'value' => '123 Main Street, Blue Area, Islamabad, Pakistan'],
            ['key' => 'phone', 'value' => '+92 300 123 4567'],
            ['key' => 'email', 'value' => 'info@solarkon.com'],
            
            // Social Links (Empty by default or put placeholders)
            ['key' => 'facebook_url', 'value' => 'https://facebook.com'],
            ['key' => 'twitter_url', 'value' => 'https://twitter.com'],
            ['key' => 'instagram_url', 'value' => 'https://instagram.com'],
            ['key' => 'linkedin_url', 'value' => 'https://linkedin.com'],
        ];

        foreach ($settings as $item) {
            // updateOrCreate prevents duplicates if you run seed twice
            Setting::updateOrCreate(
                ['key' => $item['key']], 
                ['value' => $item['value']]
            );
        }
    }
}