<?php

use App\Http\Controllers\HeroSectionsController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ✅ 1. API ROUTES MUST COME FIRST
Route::get('/hero-sections', [HomeController::class, 'getHeroData'])->name('admin.getHeroData');
Route::post('/hero-section', [HeroSectionsController::class, 'update'])->name('admin.hero.update');


// ✅ 2. Then Specific Pages
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', function () { return Inertia::render('About'); })->name('about');
Route::get('/contact', function () {return Inertia::render('Contact');})->name('contact');
Route::get('/solutions', function () { return Inertia::render('Solutions'); });
Route::get('/projects', function () { return Inertia::render('Projects'); }); 
Route::get('/financing', function () { return Inertia::render('Financing'); });
Route::get('/project-details', function () {return Inertia::render('ProjectDetails');})->name('project.details');

// // (Your Navbar linked to '/profile', so we map that here)
// Route::get('/profile', function () {
//     return Inertia::render('Profile');
// })->name('profile');

// ✅ 3. Finally, the "Catch-All" for Admin (React Router)
// If this was above /hero-sections, your API fetch would fail!
Route::get('/admin/{any?}', function () {
    return Inertia::render('admin/AdminApp');
})->where('any', '.*');










