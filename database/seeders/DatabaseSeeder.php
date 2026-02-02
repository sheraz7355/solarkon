<?php

namespace Database\Seeders;

use App\Models\HeroSections;
use App\Models\MethodologySection;
use App\Models\User;
use App\Models\PartnerLogo; // Recommended to add this if you have it
use Illuminate\Database\Seeder;
use App\Models\Contact;

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
            ['email' => 'info@solarkon.com'], 
            [
                'name' => 'solarkon',
                'password' => bcrypt('solarkon123'),
            ]
        );
        Contact::firstOrCreate(
            ['email' => 'info@gmail.com'],
            [
                'heading' => 'Get In Touch With Us',
                'description' => "We're here to help! Whether you're curious about our services, need support on an existing project, or want to request a quote, our team is ready to assist.",
                'website' => 'solarkon.org',
                'address' => '94-C J1 Johar Town, Phase 2 Lahore',
                'data'=> [
                    'phones' => [
                        'MobileNumber' => '+92 306 2935768',
                        'LandLine' => '042-36449602',
                    ],
                    'BusinessHours' => [
                        'MF' => 'Monday-Friday: 9:00 AM - 6:00 PM',
                        'SAT'=>'Saturday: 10:00 AM - 4:00 PM',
                        'SUN' => 'Sunday: Closed',
                ],
                'SocialLinks' => [
                    'Facebook' => 'https://facebook.com/solarkon',
                    'Twitter' => 'https://twitter.com/solarkon',
                    'LinkedIn' => 'https://linkedin.com/company/solarkon',
                ]
            ]
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