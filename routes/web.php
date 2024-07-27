<?php

use App\Http\Controllers\admin\LowonganPPLController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TempatPPLController;
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




Route::get('/admin/tempatppl', [TempatPPLController::class, 'index'])->name("admin.tempatppl");
Route::get('/admin/addtempatppl', [TempatPPLController::class, 'addTempatPPL'])->name("admin.addtempatppl");
Route::post('/admin/addtempatppl', [TempatPPLController::class, 'store'])->name("admin.addtempatppl");

Route::get('admin/lowonganppl', [LowonganPPLController::class, 'index'])->name("admin.lowonganppl");




Route::get('/profil', [ProfilController::class, 'index'])->name("profil");
Route::post('/profil', [ProfilController::class, 'store'])->name("profil.store");
Route::patch('/profil', [ProfilController::class, 'update'])->name("profil.update");


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
