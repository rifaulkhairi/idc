<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('frontpage/Frontpage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/lamaranku', function(){
    return Inertia::render('frontpage/Lamaranku', []);
})->name("lamaranku");

Route::get('/admin/addtempatmagang', function(){
    return Inertia::render('admin/Lamaranku', []);
})->name("lamaranku");
Route::get('/admin/dashboard', function(){
    return Inertia::render('Admin/Dashboard', []);
})->name("admin.dashboard");
Route::get('/admin/tempatppl', function(){
    return Inertia::render('Admin/pages/tempatPPL/TempatPPL', []);
})->name("admin.tempatppl");


Route::get('/profil', function(){
    return Inertia::render('frontpage/Profil', []);
})->name("profil");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
