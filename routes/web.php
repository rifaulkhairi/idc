<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\LowonganPPLController;
use App\Http\Controllers\Admin\MahasiswaPPLContoller;
use App\Http\Controllers\Admin\MahsiswaController;
use App\Http\Controllers\Admin\ProdiController;
use App\Http\Controllers\Admin\SupervisorController as AdminSupervisorController;
use App\Http\Controllers\Admin\TempatPPLController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeControler;
use App\Http\Controllers\Mahasiswa\NilaiController;
use App\Http\Controllers\Mahasiswa\ProfilController as MahasiswaProfilController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Supervisor\SupervisorController;
use App\Http\Controllers\testcontroller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name("admin.dashboard");
    Route::get('/admin/daftarprodi', [ProdiController::class, 'show'])->name("admin.daftarprodi");
    Route::get('/admin/addprodi', [ProdiController::class, 'add'])->name("admin.addprodi");
    Route::get('/admin/prodi/edit/{id}', [ProdiController::class, 'edit'])->name("admin.prodi.edit");
    Route::patch('/admin/prodi/{id}', [ProdiController::class, 'update'])->name("admin.prodi.update");

    Route::post('/admin/importdataprodi', [ProdiController::class, 'importprodi'])->name("admin.importdataprodi");
    Route::delete('/admin/prodi/{id}', [ProdiController::class, 'delete'])->name("admin.prodi.delete");


    Route::get('/admin/daftaradmin', [AdminController::class, 'index'])->name('admin.daftaradmin');
    Route::get('/admin/add', [AdminController::class, 'add'])->name('admin.add');
    Route::post('/admin/save', [AdminController::class, 'save'])->name('admin.save');
    Route::delete('/admin/delete/{email}', [AdminController::class, 'delete'])->name('admin.delete');






    Route::get('/admin/daftarsupervisor', [AdminSupervisorController::class, 'index'])->name("admin.daftarsupervisor");
    Route::get('/admin/supervisor/import', [AdminSupervisorController::class, 'import'])->name("admin.supervisor.import");
    Route::post('/admin/importsupervisor', [AdminSupervisorController::class, 'importsupervisor'])->name("admin.importsupervisor");
    Route::delete('/admin/supervisor/{id}', [AdminSupervisorController::class, 'delete'])->name("admin.supervisor.delete");
    Route::get('/admin/supervisor/{id}', [AdminSupervisorController::class, 'edit'])->name("admin.supervisor.edit");
    Route::patch('/admin/supervisor/{id}', [AdminSupervisorController::class, 'update'])->name("admin.supervisor.update");
    Route::get('/admin/tambah/supervisor', [AdminSupervisorController::class, 'tambah'])->name("admin.supervisor.tambah");
    Route::post('/admin/save/supervisor', [AdminSupervisorController::class, 'save'])->name("admin.supervisor.save");


    Route::get('/admin/daftartempatppl', [TempatPPLController::class, 'index'])->name("admin.daftartempatppl");
    Route::get('/admin/addtempatppl', [TempatPPLController::class, 'add'])->name("admin.addtempatppl");
    Route::post('/admin/importtempatppl', [TempatPPLController::class, 'importtempatppl'])->name("admin.importtempatppl");
    Route::get('/admin/tempatppl/edit/{id}', [TempatPPLController::class, 'edit'])->name('admin.tempatppl.edit');
    Route::patch('/admin/tempatppl/{id}', [TempatPPLController::class, 'update'])->name('admin.tempatppl.update');



    Route::get('/admin/daftarlowonganppl', [LowonganPPLController::class, 'index'])->name("admin.daftarlowonganppl");
    Route::get('/admin/addlowonganppl', [LowonganPPLController::class, 'add'])->name("admin.addlowonganppl");
    Route::post('/admin/importlowonganppl', [LowonganPPLController::class, 'importlowonganppl'])->name("admin.importlowonganppl");

    Route::get('/admin/daftarmahasiswappl', [MahasiswaPPLContoller::class, 'index'])->name("admin.daftarmahasiswappl");
    Route::get('/admin/mahasiswappl/edit/{id}', [MahasiswaPPLContoller::class, 'edit'])->name("admin.mahasiswappl.edit");
    Route::patch('/admin/updatenilai/{id}', [MahasiswaPPLContoller::class, 'updatenilai']);
    Route::get('admin/mahasiswa/edit/{nim}', [MahsiswaController::class, 'edit'])->name('admin.mahasiswa.edit');
    Route::get('/admin/daftarmahasiswa', [MahsiswaController::class, 'index'])->name("admin.daftarmahasiswa");
    Route::post('/admin/importmahasiswa', [MahsiswaController::class, 'importmahasiswa'])->name("admin.importmahasiswa");
    Route::get('/admin/addmahasiswa', [MahsiswaController::class, 'add'])->name("admin.addmahasiswa");
    Route::patch('/admin/mahasiswa/update/{nim}', [MahsiswaController::class, 'update'])->name("admin.mahasiswa.update");


    // Route::post('/admin/importdataprodi', [ProdiController::class, 'importprodi'])->name("admin.importdataprodi");
});



Route::middleware(['auth', 'supervisor'])->group(function () {
    Route::get('/supervisor/dashboard', [SupervisorController::class, 'index'])->name("supervisor.dashboard");
    Route::get('/supervisor/daftarmahasiswappl', [SupervisorController::class, 'daftarmahasiswappl']);
    Route::get('/supervisor/editnilai/{id}', [SupervisorController::class, 'editnilai']);
    Route::patch('/supervisor/updatenilai/{id}', [SupervisorController::class, 'updatenilai']);
});

Route::middleware(['auth', 'user'])->group(function () {
    Route::get('/', [HomeControler::class, 'index'])->name("frontpage");
    Route::get('/profil', [MahasiswaProfilController::class, 'index'])->name("profil");
    Route::get('/nilai', [NilaiController::class, 'index'])->name("nilai");
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/pw', [testcontroller::class, 'index'])->name('index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
