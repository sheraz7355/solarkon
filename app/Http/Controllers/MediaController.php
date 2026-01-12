<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    // 1. GET: Fetch all media for the library
    public function index()
    {
        // Return JSON ordered by newest first
        return response()->json(Media::latest()->get());
    }

    public function store(Request $request)
{
    // Validate: 20MB = 20480KB
    $request->validate([
        'file' => 'required|file|mimes:jpeg,png,webp,jpg,mp4,mov,avi,wmv,pdf|max:20480',
    ]);

    if ($request->hasFile('file')) {
        $file = $request->file('file');
        
        // Clean filename
        $filename = time() . '_' . preg_replace('/[^A-Za-z0-9\-\.]/', '', $file->getClientOriginalName());
        
        // Save to public storage
        $path = $file->storeAs('media', $filename, 'public');

        $media = Media::create([
            'name' => $file->getClientOriginalName(),
            'file_path' => $path,
            'url' => asset('storage/' . $path),
            'mime_type' => $file->getMimeType(),
            'size' => $file->getSize(),
        ]);

        return response()->json($media, 201);
    }

    return response()->json(['error' => 'File upload failed'], 400);
}

    // 3. DELETE: Remove media
    public function destroy($id)
    {
        $media = Media::findOrFail($id);

        // Delete the physical file
        if (Storage::disk('public')->exists($media->file_path)) {
            Storage::disk('public')->delete($media->file_path);
        }

        // Delete the database record
        $media->delete();

        return response()->json(['message' => 'Media deleted successfully']);
    }
}