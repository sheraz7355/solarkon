<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    // ADMIN: Show the Management Page
    public function indexAdmin()
    {
        return Inertia::render('admin/Projects', [
            'projects' => Project::latest()->get(),
            // You can pass Hero Slider data here too if stored in DB
        ]);
    }

    // ADMIN: Store a new Project
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'is_featured' => 'boolean',
            'status' => 'required',
            'tag' => 'required',
            'description' => 'required',
            'location' => 'required',
            'date' => 'required',
            'image' => 'required',
            'overview' => 'nullable',
            'execution_points' => 'array',
            'impact_data' => 'array', // The 6 cards data
            'gallery_images' => 'array',
        ]);
        $data['is_featured'] = $request->boolean('is_featured');
        $data['slug'] = \Illuminate\Support\Str::slug($data['title']);

        Project::create($data);

        return redirect()->back();
    }

   // ADMIN: Update Project
    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        
        $data = $request->validate([
            'title' => 'required',
            'is_featured' => 'boolean', 
            'status' => 'required',
            'tag' => 'required',
            'description' => 'required',
            'location' => 'required',
            'date' => 'required',
            'image' => 'required',
            'overview' => 'nullable',
            'execution_points' => 'array',
            'impact_data' => 'array',
            'gallery_images' => 'array',
        ]);

        $data['is_featured'] = $request->boolean('is_featured');

        $project->update($data);

        return redirect()->back();
    }

    // ADMIN: Delete Project
    public function destroy($id)
    {
        Project::findOrFail($id)->delete();
        return redirect()->back();
    }
}