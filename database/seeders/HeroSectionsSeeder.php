<?php

namespace Database\Seeders;

use App\Models\HeroSections;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class HeroSectionsSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        HeroSections::create([
            'title'       => $faker->sentence(),
            'description' => $faker->paragraph(3),
            'page_name'   => $faker->randomElement([
                'home',
                'about',
                'services',
                'projects',
                'contact',
            ]),
            'slider_url'  => null,
            'image_url'   => null,
            'stats'       => $faker->numberBetween(10, 500),
        ]);
    }
}
