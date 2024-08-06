<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Imports\ProdiImport;
use App\Models\Prodi;
use Maatwebsite\Excel\Facades\Excel;

class ProdiController extends Controller
{
    public function show(Request $request)
    {
        $daftarprodi = Prodi::all();
        return Inertia::render('Admin/pages/Data/Prodi/ListProdi', ['daftarprodi' => $daftarprodi]);
    }

    public function add(Request $request)
    {
        return Inertia::render('Admin/pages/Data/Prodi/AddProdi');
    }

    public function importprodi(Request $request)
    {

        Excel::import(new ProdiImport, $request->file('dataprodi'));

        redirect()->route('admin.daftarprodi');
    }
}
