<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HeroSections>
 */
class HeroSectionsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
             'title'      => 'Powering a Brighter, Greener Pakistan',
            'description' => 'Solarkon Private Limited is a premier solar energy solutions provider in Pakistan, known for delivering high-performance systems tailored to residential, commercial, industrial, and agricultural needs.',
            'page_name'   => 'home',
            'slider_url'  => json_encode([
                $this->faker->imageUrl(1200, 400, 'business'),
                $this->faker->imageUrl(1200, 400, 'technology'),
            ]),
            'image_url'   => $this->faker->imageUrl(800, 600, 'solar'),
            'stats'       => $this->faker->numberBetween(10, 500),
        ];
    }



}
