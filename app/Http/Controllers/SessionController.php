<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;

class SessionController extends Controller
{
    //
    public function create()
    {
        return inertia('Login');
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'name' => ['required', 'string'],
            'password' => ['required'],
        ]);

        if(!Auth::attempt($credentials)){
            return back()->withErrors([
                'name' => 'The provided credentials do not match our records.',
            ])->onlyInput('name');
        }
        $request->session()->regenerate();
        return redirect()->intended('/admin');
    }
}
