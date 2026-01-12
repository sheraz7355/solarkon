<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function Termwind\render;

class ProjectController extends Controller
{
    // GET: Return JSON for React
    public function index(){
 $projectData = Project::select(
        'id', 
        'title', 
        'slug', 
        'status', 
        'tag', 
        'description', 
        'location', 
        'date', 
        'image', 
        'is_featured'
    )->latest()->get();            
    return Inertia::render('Projects',['projectData'=>$projectData]);
    }

    public function showProject($slug)
    {
        // Find the project by the slug column
        $project = Project::where('slug', $slug)->first();

        // If slug doesn't exist, redirect back to list
        if (!$project) {
            return redirect('/projects');
        }

        return Inertia::render('ProjectDetails', [
            'project' => $project
        ]);
    }
    public function getData()
    {
        return response()->json(Project::latest()->get());
    }

    // POST: Create
    public function store(Request $request)
{
    // 1. Validate
    $data = $request->validate([
        'title' => 'required',
        'is_featured' => 'boolean',
        'status' => 'required',
        'tag' => 'required',
        'description' => 'required',
        'location' => 'required',
        'date' => 'required',
        'image' => 'required', // <--- MAKE SURE YOU SELECT THE MAIN IMAGE IN SECTION 1
        'overview' => 'nullable',
        'execution_points' => 'array',
        'impact_data' => 'array',
        'gallery_images' => 'array',
    ]);

    $data['is_featured'] = $request->boolean('is_featured');

    // 2. AUTO-FIX DUPLICATE SLUGS
    $slug = \Illuminate\Support\Str::slug($data['title']);
    // Check if slug exists
    if (Project::where('slug', $slug)->exists()) {
        // Append a random number or timestamp to make it unique
        $slug = $slug . '-' . time();
    }
    $data['slug'] = $slug;

    // 3. Create
    Project::create($data);

    return response()->json(['message' => 'Project created!']);
}

    // POST: Update (using POST for easier handling)
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
        $data['slug'] = \Illuminate\Support\Str::slug($data['title']);

        $project->update($data);

        return response()->json(['message' => 'Project updated!', 'project' => $project]);
    }

    // DELETE
    public function destroy($id)
    {
        Project::findOrFail($id)->delete();
        return response()->json(['message' => 'Project deleted']);
    }
}