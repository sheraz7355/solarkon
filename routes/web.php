<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// 1. Home Page
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// 2. About Us Page
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// 3. Contact Us Page
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// 4. Projects / Profile Page
// (Your Navbar linked to '/profile', so we map that here)
Route::get('/profile', function () {
    return Inertia::render('Profile');
})->name('profile');

// 5. Project Details Page
// (Adding this just in case you need to link to it later)
Route::get('/project-details', function () {
    return Inertia::render('ProjectDetails');
})->name('project.details');