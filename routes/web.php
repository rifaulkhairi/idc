<?php

use App\Http\Controllers\admin\LowonganPPLController;
use App\Http\Controllers\Admin\ProdiController;
use App\Http\Controllers\DaftarPelamarPPLConroller;
use App\Http\Controllers\DetailPelamarPPLContoller;
use App\Http\Controllers\FrontpageController;
use App\Http\Controllers\HomeControler;
use App\Http\Controllers\LamarankuController;
use App\Http\Controllers\LamaranPPLController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TempatPPLController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeControler::class, 'index'])->name("frontpage");
// Route::get('/lamaranku', [LamarankuController::class, 'index'])->name("lamaranku");

Route::get('/admin/addtempatmagang', function () {
    return Inertia::render('admin/Lamaranku', []);
})->name("addlamaran");
Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard', []);
})->name("admin.dashboard");


Route::middleware('auth')->group(function () {
    Route::get('/admin/daftarprodi', [ProdiController::class, 'show'])->name("admin.daftarprodi");
    Route::get('/admin/addprodi', [ProdiController::class, 'add'])->name("admin.addprodi");
    Route::post('/admin/importdataprodi', [ProdiController::class, 'importprodi'])->name("admin.importdataprodi");
});

// Route::get('/admin/tempatppl', [TempatPPLController::class, 'index'])->name("admin.tempatppl");
// Route::get('/admin/addtempatppl', [TempatPPLController::class, 'addTempatPPL'])->name("admin.addtempatppl");
// Route::post('/admin/addtempatppl', [TempatPPLController::class, 'store'])->name("admin.addtempatppl");

// Route::get('admin/lowonganppl', [LowonganPPLController::class, 'index'])->name("admin.lowonganppl");
// Route::get('admin/daftarpelamarppl', [DaftarPelamarPPLConroller::class, 'index'])->name("admin.daftarpelamarppl");
// Route::get('/admin/detailpelamarppl/{id}', [DetailPelamarPPLContoller::class, 'show'])->name("admin.detailpelamar");
// Route::patch('/admin/handlelamaran/{id}', [DetailPelamarPPLContoller::class, 'handlelamaran'])->name("admin.handlelamaran");




Route::get('/profil', [ProfilController::class, 'index'])->name("profil");
// Route::post('/profil', [ProfilController::class, 'store'])->name("profil.store");
// Route::patch('/profil', [ProfilController::class, 'update'])->name("profil.update");

Route::post('/lamaranppl/{id}', [LamaranPPLController::class, 'store'])->name("lamaranppl.store");



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
