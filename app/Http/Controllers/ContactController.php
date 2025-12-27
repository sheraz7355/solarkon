<?php

namespace App\Http\Controllers;

use App\Models\ContactRequest;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    // 1. Store: For the public form
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:50',
            'email' => 'required|email|max:255',
        ]);

        ContactRequest::create($validated);

        return redirect()->back()->with('success', 'Request sent successfully!');
    }

    // 2. Index: For Admin Dashboard (Matches Route::get('/userDetails'))
    public function index()
    {
        return response()->json(
            ContactRequest::latest()->get()
        );
    }

    // 3. Destroy: For Admin Dashboard (Matches Route::delete('/userDetails/{id}'))
    public function destroy($id)
    {
        ContactRequest::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}