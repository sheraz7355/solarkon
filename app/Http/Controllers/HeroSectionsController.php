<?php

namespace App\Http\Controllers;

use App\Models\HeroSections;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HeroSectionsController extends Controller
{


    
    public function update(Request $request)
    {
        // 1. Validation
        $request->validate([
            'page_name' => 'required|string',
            'title'     => 'required|string',
            'description' => 'required|string',
        ]);

        // 2. SECURITY FIX: Use firstOrFail
        // If "page_name" doesn't exist in DB, this stops execution and returns 404.
        // No new records will be created by accident.
        $hero = HeroSections::where('page_name', $request->page_name)->firstOrFail();

        // 3. HOME PAGE LOGIC
        if ($hero->page_name === 'home') {
            
            // Validate required files for Home
            $request->validate([
                'stats'    => 'required|array|min:1',
                'slider'   => 'required|array|min:1',
            ]);

            // --- A. BACKGROUND IMAGE ---
            if ($request->hasFile('image')) {
                // Delete Old: We must remove '/storage/' from the DB path to find the file on disk
                if ($hero->image_url) {
                    $relativePath = str_replace('/storage/', '', $hero->image_url);
                    if (Storage::disk('public')->exists($relativePath)) {
                        Storage::disk('public')->delete($relativePath);
                    }
                }

                
                $path = $request->file('image')->store('hero', 'public');
                
                
                $hero->image_url = '/storage/' . $path;
            }

            // --- B. SLIDER LOGIC ---
            if ($request->has('slider')) {
                $finalSliderPaths = [];
                $rawSlider = $request->all()['slider'] ?? [];

                foreach ($rawSlider as $item) {
                    // New File? Upload it.
                    if ($item instanceof \Illuminate\Http\UploadedFile) {
                        $path = $item->store('hero/slider', 'public');
                        $finalSliderPaths[] = '/storage/' . $path;
                    } 
                    // Old URL? Keep it.
                    elseif (is_string($item)) {
                        $finalSliderPaths[] = $item;
                    }
                }
                $hero->slider_url = $finalSliderPaths;
            }

            // --- C. STATS ---
            $hero->stats = $request->stats;
        }

        // 4. SAVE TEXT
        $hero->title = $request->title;
        $hero->description = $request->description;
        $hero->save();

        return back()->with('success', 'Hero section updated successfully!');
    }
}