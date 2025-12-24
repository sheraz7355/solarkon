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

    // 2. POST: Upload new media
    public function store(Request $request)
    {
        // Validate: Allow Images & Video, Max 50MB
        $request->validate([
            'file' => 'required|file|mimes:jpeg,png,webp,jpg,mp4,mov,avi,wmv|max:51200',
        ]);

        if ($request->hasFile('file')) {
            $file = $request->file('file');

            // Sanitize filename
            $filename = time() . '_' . preg_replace('/[^A-Za-z0-9\-\.]/', '', $file->getClientOriginalName());

            // Save to 'public/media' folder
            $path = $file->storeAs('media', $filename, 'public');

            // Create Database Record
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