<?php

namespace App\Http\Controllers\Mahasiswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilController extends Controller
{
    public function index()
    {
        return Inertia::render('Mahasiswa/profil');
    }
}
