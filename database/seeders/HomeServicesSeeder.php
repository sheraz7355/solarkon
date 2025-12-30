<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\HomeServiceSection;

class HomeServicesSeeder extends Seeder
{
    public function run()
    {
        // Only create if the table is empty
        if (HomeServiceSection::count() === 0) {
            HomeServiceSection::create([
                'heading_green' => 'Our services',
                'heading_dark' => 'in the field of photovoltaics & renewable energies',
                'description' => 'We plan and install photovoltaic systems for roofs, carports, and PV fences.',
                'services' => [
                    [
                        'title' => 'PV Roof Systems', 
                        'image' => 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=600&q=80'
                    ],
                    [
                        'title' => 'In-Roof Systems', 
                        'image' => 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=600&q=80'
                    ],
                    [
                        'title' => 'PV Fences', 
                        'image' => 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?auto=format&fit=crop&w=600&q=80'
                    ],
                    [
                        'title' => 'Solar Carports', 
                        'image' => 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=600&q=80'
                    ],
                ]
            ]);
            
            $this->command->info('Home Services seeded successfully!');
        } else {
            $this->command->info('Home Services already exist. Skipping.');
        }
    }
}