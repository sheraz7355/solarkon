<?php

namespace App\Http\Controllers;

use App\Models\HeroSections;
use Hamcrest\Type\IsString;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Fetch the Home Page Data
        // We use 'first()' so it returns null if not found (handled in React)
        $heroData  = HeroSections::where('page_name', 'home')->first();
        $heroStats = $heroData ? $heroData->stats : []; 
        return Inertia::render('Home', [
            'heroContent' => $heroData,
            'heroStats' =>   $heroStats ]);
    }

  public function getHeroData(){

        
        // determine the page 
        $hero = HeroSections::where('page_name', 'home')->firstOrFail();

      
        return response()->json([
            'title'       => $hero->title,
            'description' => $hero->description,
            'image_url'   => $hero->image_url,
            'slider_url'  => $hero->slider_url ?? [],
            'stats'       => $hero->stats ?? [],
        ]);
       


    }
}