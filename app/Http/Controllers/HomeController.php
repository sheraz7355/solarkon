<?php

namespace App\Http\Controllers;

use App\Models\HeroSections; // Ensure this matches your actual model filename
use App\Models\MethodologySection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\PartnerLogo;


class HomeController extends Controller
{
    public function index()
    {
        $heroData  = HeroSections::where('page_name', 'home')->first();
        $heroStats = $heroData ? $heroData->stats : [];
        
        // Fetch methodology data for the frontend props
        $methodologyData = MethodologySection::first();
         $logosRecord = PartnerLogo::first();
    $partnerLogos = $logosRecord ? $logosRecord->logos : [];

        return Inertia::render('Home', [
            'heroContent' => $heroData,
            'heroStats'   => $heroStats,
            'methodologyData' => $methodologyData,
            'partnerLogos' => $partnerLogos // Pass this so the home page displays it
        ]);
    }

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
        $hero = HeroSections::where('page_name', 'home')->firstOrFail();
      
        return response()->json([
            'title'       => $hero->title,
            'description' => $hero->description,
            'image_url'   => $hero->image_url,
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
    $request->validate([
        'logos' => 'nullable|array',
        'logos.*.file' => 'nullable|image|max:2048', // for new uploads
        'logos.*.url' => 'nullable|string',          // for existing ones
    ]);

    $storedLogos = [];

    if ($request->has('logos')) {
        foreach ($request->logos as $index => $logo) {
            // Case 1: New file upload
            if ($request->hasFile("logos.$index.file")) {
                $file = $request->file("logos.$index.file");
                $path = $file->store('logos', 'public');
                $storedLogos[] = Storage::url($path);
            } 
            // Case 2: Keep existing logo
            elseif (isset($logo['url'])) {
                $storedLogos[] = $logo['url'];
            }
        }
    }

    PartnerLogo::updateOrCreate(['id' => 1], ['logos' => $storedLogos]);

    return redirect()->back()->with('success', 'Partners updated!');
}
}