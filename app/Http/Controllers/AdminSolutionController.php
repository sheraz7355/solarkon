<?php

namespace App\Http\Controllers;

use App\Models\Solution;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSolutionController extends Controller
{

    public function get(){
         $solutionData = Solution::all()->pluck('capacities', 'system_key');
    
    return Inertia::render('Solutions', [
        'solutionData' => $solutionData // Passing DB data to React
    ]);
    }
    // Get settings for Admin Panel

    public function index()
    {
        // Fetch all, key by system_key for easy frontend use
        $settings = Solution::all()->pluck('capacities', 'system_key');
        
        // Ensure default structure if DB is empty
        $defaults = [
            'off-grid' => [],
            'hybrid' => [],
            'on-grid' => []
        ];

        return response()->json(array_merge($defaults, $settings->toArray()));
    }

    // Update settings from Admin Panel
    public function update(Request $request)
    {
        $data = $request->validate([
            'off-grid' => 'array',
            'hybrid'   => 'array',
            'on-grid'  => 'array',
        ]);

        foreach ($data as $key => $capacities) {
            Solution::updateOrCreate(
                ['system_key' => $key],
                ['capacities' => $capacities]
            );
        }

        return response()->json(['message' => 'Solutions updated successfully']);
    }
}