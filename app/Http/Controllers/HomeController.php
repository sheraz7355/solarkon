<?php

namespace App\Http\Controllers;

use App\Models\HeroSections;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Fetch the Home Page Data
        // We use 'first()' so it returns null if not found (handled in React)
        $heroData = HeroSections::where('page_name', 'home')->first();

        return Inertia::render('Home', [
            'heroContent' => $heroData
        ]);
    }
}