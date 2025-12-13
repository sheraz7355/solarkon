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
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'page_name' => $this->faker->randomElement(['home', 'about', 'contact', 'projects', 'solutions', 'financing']),
        ];
    }

    public function withMedia(): static
{
    return $this->state(fn () => [
        'slider_url' => [
            fake()->imageUrl(1200, 400),
            fake()->imageUrl(1200, 400),
        ],
        'image_url' => fake()->imageUrl(800, 600),
        'stats'     => fake()->numberBetween(10, 500),
    ]);
}

}
