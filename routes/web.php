<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HeroSectionsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::get('/work-data',[HomeController::class,'getMethadologyData'])->name('admin.work-data');
Route::get('/hero-sections', [HomeController::class, 'getHeroData'])->name('admin.getHeroData');
Route::get('/logos',[HomeController::class,'getLogos'])->name('admin.getLogos');
Route::get('/settings',[SettingsController::class,'getSettings'])->name('admin.getSettings');
Route::get('/userDetails',[ContactController::class,'index'])->name('admin.getUserDetails');
Route::get('/homeServices',[HomeController::class,'getServices'])->name('admin.getServices');
Route::post('/hero-section', [HeroSectionsController::class, 'update'])->name('admin.hero.update');
Route::post('/work-data',[HomeController::class,'updateData'])->name('admin.work-data.update');
Route::post('/logos',[HomeController::class,'updateLogos'])->name('admin.updateLogos');
Route::post('/settings',[SettingsController::class,'updateSettings'])->name('admin.updateSettings');
Route::post('/userDetails',[ContactController::class,'store'])->name('admin.updateUserDetails');
Route::post('/homeServices',[HomeController::class,'storeServices'])->name('admin.storeServices');

Route::delete('/userDetails/{id}',[ContactController::class,'destroy'])->name('admin.deleteUserDetails');

// --- MEDIA ROUTES ---
Route::get('/media', [MediaController::class, 'index'])->name('media.index');
Route::post('/media/upload', [MediaController::class, 'store'])->name('media.store');
Route::delete('/media/{id}', [MediaController::class, 'destroy'])->name('media.destroy');




Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', function () { return Inertia::render('About'); })->name('about');
Route::get('/contact', function () {return Inertia::render('Contact');})->name('contact');
Route::get('/solutions', function () { return Inertia::render('Solutions'); });
Route::get('/projects', function () { return Inertia::render('Projects'); }); 
Route::get('/financing', function () { return Inertia::render('Financing'); });
Route::get('/project-details', function () {return Inertia::render('ProjectDetails');})->name('project.details');
Route::get('/store', function () {
    return Inertia::render('Store');
});

// // (Your Navbar linked to '/profile', so we map that here)
// Route::get('/profile', function () {
//     return Inertia::render('Profile');
// })->name('profile');

// ✅ 3. Finally, the "Catch-All" for Admin (React Router)
// If this was above /hero-sections, your API fetch would fail!
Route::get('/admin/{any?}', function () {
    return Inertia::render('admin/AdminApp');
})->where('any', '.*');










