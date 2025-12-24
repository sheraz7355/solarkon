<?php

namespace App\Http\Controllers;

use App\Models\HeroSections;
use Illuminate\Http\Request;

class HeroSectionsController extends Controller
{
    public function update(Request $request)
    {
        // 1. Validation for Shared Fields
        $request->validate([
            'page_name'   => 'required|string',
            'title'       => 'required|string',
            'description' => 'required|string',
        ]);

        // 2. Fetch Record (Security: firstOrFail)
        $hero = HeroSections::where('page_name', $request->page_name)->firstOrFail();

        // 3. HOME PAGE SPECIFIC LOGIC
        if ($hero->page_name === 'home') {
            
            // Validate the NEW Data Structure (URLs instead of Files)
            $request->validate([
                'image_url' => 'nullable|string', // Expecting a URL string
                'stats'     => 'required|array|min:1',
                'slider'    => 'nullable|array',  // Expecting array of URL strings
                'slider.*'  => 'string',
            ]);

            // --- A. BACKGROUND IMAGE ---
            // If the request has an image URL, update it.
            if ($request->filled('image_url')) {
                $hero->image_url = $request->image_url;
            }

            // --- B. SLIDER LOGIC ---
            // Simply save the array of URLs.
            // The Frontend sends: ['http://site/a.jpg', 'http://site/b.jpg']
            // We save it directly (Laravel casts it to JSON automatically if model is set up right)
            if ($request->has('slider')) {
                $hero->slider_url = $request->slider ?? [];
            }

            // --- C. STATS ---
            $hero->stats = $request->stats;
        }

        // 4. SAVE TEXT (Shared by all pages)
        $hero->title = $request->title;
        $hero->description = $request->description;
        
        $hero->save();

        return back()->with('success', 'Hero section updated successfully!');
    }
}