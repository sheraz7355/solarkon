<?php

namespace Database\Seeders;

use App\Models\HeroSections;
use App\Models\MethodologySection;
use App\Models\User;
use App\Models\PartnerLogo; // Recommended to add this if you have it
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Admin User
        // usage of firstOrCreate prevents errors if you seed multiple times
        User::firstOrCreate(
            ['email' => 'admin@solarkon.com'], 
            [
                'name' => 'Admin User',
                'password' => bcrypt('password'),
            ]
        );

        // 2. Run Model Factories (For Hero & Methodology)
        // Check if they exist first to avoid duplicates if seeding again
        if (HeroSections::count() === 0) {
            HeroSections::factory()->create();
        }
        
        if (MethodologySection::count() === 0) {
            MethodologySection::factory()->create();
        }

        // 3. Create Empty Partner Logos record (Critical for the frontend array)
        if (PartnerLogo::count() === 0) {
            PartnerLogo::create(['logos' => []]);
        }

        // 4. ✅ CALL THE SETTINGS SEEDER (The Correct Way)
        $this->call(SettingsSeeder::class);
    }
}