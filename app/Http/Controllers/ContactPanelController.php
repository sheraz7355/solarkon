<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactPanelController extends Controller
{
    //
    public function index()
    {
        //
        $contact = Contact::first();
        return response()->json($contact);

    }
     
   public function update(Request $request)
{
    // 1. Validate the data first (always validate before touching the DB)
    $validatedData = $request->validate([
        'heading'     => 'required|string|max:255',
        'description' => 'nullable|string',
        'email'       => 'nullable|email|max:255',
        'website'     => 'nullable|string|max:255',
        'address'     => 'nullable|string|max:500',
        'data'        => 'nullable|array', // Use 'array' because React sends a JSON object
    ]);

    // 2. Find the first record, or initialize a new instance if none exists
    $contact = Contact::firstOrNew();

    // 3. Fill the model with the validated data
    $contact->fill($validatedData);

    // 4. Save the model (Eloquent handles INSERT vs UPDATE automatically)
    $contact->save();

    return response()->json([
        'message' => 'Contact information updated successfully', 
        'contact' => $contact
    ]);
}
}
