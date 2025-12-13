<?php

use App\Http\Controllers\HeroSectionsController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin/{any?}', function () {
    return Inertia::render('admin/AdminApp');
})->where('any', '.*'); 



// 1. Home Page
Route::get('/', [HomeController::class, 'index'])->name('home');


// 2. About Us Page
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// 3. Contact Us Page
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// // (Your Navbar linked to '/profile', so we map that here)
// Route::get('/profile', function () {
//     return Inertia::render('Profile');
// })->name('profile');

// 5. Project Details Page
Route::get('/project-details', function () {
    return Inertia::render('ProjectDetails');
})->name('project.details');


Route::get('/solutions', function () { return Inertia::render('Solutions'); });
Route::get('/projects', function () { return Inertia::render('Projects'); }); 
Route::get('/financing', function () { return Inertia::render('Financing'); });