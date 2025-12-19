<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HeroSections>
 */

class MethodologySectionFactory extends Factory
{

       /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // 1. Sticky Left Side Data
            'main_heading' => 'Our Process Simplified',
            'main_description' => 'A transparent, step-by-step journey to energy independence. We handle the paperwork, engineering, and installation so you can enjoy the savings.',
            
            // 2. Right Side Steps (JSON Array)
            'steps' => [
                [
                    'title' => 'Consultation & Assessment',
                    'duration' => '1-2 Days',
                    'description' => 'We analyze your energy bills and roof structure to design the perfect efficiency model for your home. This ensures we build exactly what you need.'
                ],
                [
                    'title' => 'System Design',
                    'duration' => '3-5 Days',
                    'description' => 'Our engineers create a detailed 3D simulation of your roof. We calculate shadow analysis and sun path to ensure maximum sunlight exposure.'
                ],
                [
                    'title' => 'Precision Installation',
                    'duration' => '1 Week',
                    'description' => 'Installation is carried out by certified professionals. We use high-grade mounting structures and tidy cabling to ensure your home looks as good as it performs.'
                ],
                [
                    'title' => 'Activation & Support',
                    'duration' => 'On Approval',
                    'description' => 'After rigorous safety testing, we flip the switch. You get a smart monitoring app to track generation, plus our dedicated after-sales maintenance support.'
                ]
            ],
        ];
    }
}