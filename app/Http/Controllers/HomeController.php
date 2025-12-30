<?php

namespace App\Http\Controllers;

use App\Models\HeroSections; 
use App\Models\MethodologySection;
use App\Models\PartnerLogo;
use App\Models\HomeServiceSection; 
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $heroData  = HeroSections::where('page_name', 'home')->first();
        $heroStats = $heroData ? $heroData->stats : [];
        
        $methodologyData = MethodologySection::first();
        
        $logosRecord = PartnerLogo::first();
        $partnerLogos = $logosRecord ? $logosRecord->logos : [];

        // Fetch Services Data
        $servicesData = HomeServiceSection::first();

        return Inertia::render('Home', [
            'heroContent' => $heroData,
            'heroStats'   => $heroStats,
            'methodologyData' => $methodologyData,
            'partnerLogos' => $partnerLogos,
            'servicesData' => $servicesData, 
        ]);
    }

    // --- NEW: Get Services Data for Admin Form ---
    public function getServices()
    {
        // Get data or return default structure if DB is empty
        $data = HomeServiceSection::firstOrNew([], [
            'heading_green' => 'Our services',
            'heading_dark'  => 'in the field of photovoltaics & renewable energies',
            'description'   => 'We plan and install photovoltaic systems for roofs, carports, and PV fences.',
            'services'      => [
                ['title' => 'PV Roof Systems', 'image' => ''],
                ['title' => 'In-Roof Systems', 'image' => ''],
                ['title' => 'PV Fences', 'image' => ''],
                ['title' => 'Solar Carports', 'image' => '']
            ]
        ]);

        return response()->json($data);
    }

    public function storeServices(Request $request)
    {
        $validated = $request->validate([
            'heading_green' => 'nullable|string|max:255',
            'heading_dark'  => 'nullable|string|max:255',
            'description'   => 'nullable|string',
            'services'      => 'nullable|array|min:1',
            'services.*.title' => 'required|string',
            'services.*.image' => 'nullable|string',
        ]);

        HomeServiceSection::updateOrCreate(
            ['id' => 1], // Always update the first record
            [
                'heading_green' => $validated['heading_green'],
                'heading_dark'  => $validated['heading_dark'],
                'description'   => $validated['description'],
                'services'      => $validated['services'] ?? []
            ]
        );

        return response()->json(['message' => 'Services updated successfully']);
    }

    // ❌ THE ERROR WAS HERE: You had a '}' here that closed the class too early. I removed it.

    // ✅ FIX: This function was empty, now it returns data for the Admin Form
    public function getMethadologyData()
    {
        $data = MethodologySection::firstOrNew([], [
            'main_heading' => 'Our Process Simplified',
            'main_description' => '',
            'steps' => []
        ]);

        return response()->json($data);
    }

    public function getHeroData()
    {
        // Recommendation: Use first() instead of firstOrFail() to prevent 404 errors if DB is empty
        $hero = HeroSections::where('page_name', 'home')->first(); 
      
        return response()->json([
            'title'       => $hero->title ?? '',
            'description' => $hero->description ?? '',
            'image_url'   => $hero->image_url ?? '',
            'slider_url'  => $hero->slider_url ?? [],
            'stats'       => $hero->stats ?? [],
        ]);
    }

    // ✅ FIX: Removed dd($request) so saving actually works
    public function updateData(Request $request)
    {
        // 1. Validate
        $validated = $request->validate([
            'main_heading' => 'required|string|max:255',
            'main_description' => 'nullable|string',
            'steps' => 'nullable|array',
            'steps.*.title' => 'required|string',
            'steps.*.duration' => 'required|string',
            'steps.*.description' => 'required|string',
        ]);

        // 2. Save
        MethodologySection::updateOrCreate(
            ['id' => 1], 
            [            
                'main_heading' => $validated['main_heading'],
                'main_description' => $validated['main_description'],
                'steps' => $validated['steps'] ?? [] 
            ]
        );

        // 3. Return success
        return redirect()->back()->with('success', 'Methodology section saved!');
    }

    public function getLogos()
    {
        $data = PartnerLogo::first();
        // Return empty array if no record exists yet
        return response()->json($data ? $data->logos : []);
    }

    public function updateLogos(Request $request)
    {
        // 1. Validate: We now expect a simple array of strings (URLs)
        $data = $request->validate([
            'logos' => 'nullable|array',
            'logos.*' => 'string', // Ensure every item is just a text URL
        ]);

        // 2. Extract the array (or empty if null)
        $logoUrls = $data['logos'] ?? [];

        // 3. Save directly. 
        PartnerLogo::updateOrCreate(
            ['id' => 1], 
            ['logos' => $logoUrls]
        );

        return redirect()->back()->with('success', 'Partners updated successfully!');
    }
}