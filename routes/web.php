<?php

use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\AdminSolutionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HeroSectionsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\SettingsController;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', function () { return Inertia::render('About'); })->name('about');
Route::get('/contact', function () {return Inertia::render('Contact');})->name('contact');
Route::get('/solutions',[AdminSolutionController::class,'get'])->name('solutions');
Route::get('/projects', [ProjectController::class,'index'])->name('projects'); 
Route::get('/financing', function () { return Inertia::render('Financing'); });
Route::get('/projects/{slug}', [ProjectController::class, 'showProject'])->name('project.details');
Route::get('/store',[AdminProductController::class,'get'])->name('store');
Route::get('/product-details', [AdminProductController::class,'product_details'])->name('product-details');
 Route::get('/profile', function () {
     return Inertia::render('Profile');
 })->name('profile');




Route::get('/login',[SessionController::class,'create'])->name('login')->middleware('guest');
Route::post('/login',[SessionController::class,'store'])->name('login.store')->middleware('guest');




Route::middleware(['auth'])->group(function () {
    Route::get('/logout',[SessionController::class,'destroy'])->name('logout');

    // Admin Data Endpoints
    Route::get('/work-data',[HomeController::class,'getMethadologyData'])->name('admin.work-data');
    Route::get('/hero-sections', [HomeController::class, 'getHeroData'])->name('admin.getHeroData');
    Route::get('/logos',[HomeController::class,'getLogos'])->name('admin.getLogos');
    Route::get('/settings',[SettingsController::class,'getSettings'])->name('admin.getSettings');
    Route::get('/userDetails',[ContactController::class,'index'])->name('admin.getUserDetails');
    Route::get('/homeServices',[HomeController::class,'getServices'])->name('admin.getServices');
    
    // Admin Actions
    Route::post('/hero-section', [HeroSectionsController::class, 'update'])->name('admin.hero.update');
    Route::post('/work-data',[HomeController::class,'updateData'])->name('admin.work-data.update');
    Route::post('/logos',[HomeController::class,'updateLogos'])->name('admin.updateLogos');
    Route::post('/settings', [SettingsController::class,'updateSettings'])->name('admin.updateSettings');
    Route::post('/userDetails',[ContactController::class,'store'])->name('admin.updateUserDetails');
    Route::post('/homeServices',[HomeController::class,'storeServices'])->name('admin.storeServices');
    Route::delete('/userDetails/{id}',[ContactController::class,'destroy'])->name('admin.deleteUserDetails');

    //project management routes
    Route::get('/admin/projects-data', [ProjectController::class, 'getData'])->name('admin.projects.index');
    Route::post('/admin/projects', [ProjectController::class, 'store'])->name('admin.projects.store');
    Route::post('/admin/projects/{id}', [ProjectController::class, 'update'])->name('admin.projects.update');
    Route::delete('/admin/projects/{id}', [ProjectController::class, 'destroy'])->name('admin.projects.destroy');

    //solutions management routes

    Route::get('/admin/solutions-data', [AdminSolutionController::class, 'index']);
    Route::post('/admin/solutions', [AdminSolutionController::class, 'update']);

    //store product management routes
     Route::get('/admin/products-data', [AdminProductController::class, 'index']);
    Route::post('/admin/products', [AdminProductController::class, 'store']);
    Route::delete('/admin/products/{id}', [AdminProductController::class, 'destroy']);

    // Media Routes
    Route::get('/media', [MediaController::class, 'index'])->name('media.index');
    Route::post('/media/upload', [MediaController::class, 'store'])->name('media.store');
    Route::delete('/media/{id}', [MediaController::class, 'destroy'])->name('media.destroy');

    // --- MAIN ADMIN ENTRY POINT ---
    // This loads the AdminApp.jsx, which then uses React Router.
    // Because this is inside middleware('auth'), users cannot reach your React Router 
    // unless they are logged in via Laravel first.
    Route::get('/admin/{any?}', function () {
        return Inertia::render('admin/AdminApp');
    })->where('any', '.*');

});










