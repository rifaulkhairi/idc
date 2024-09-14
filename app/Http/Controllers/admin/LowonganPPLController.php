<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Imports\LowonganPPLImport;
use App\Models\LowonganPPL;
use App\Models\TempatPPL;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;


class LowonganPPLController extends Controller
{
    public function index(Request $request)
    {
        $daftarlowonganppl = LowonganPPL::join('sekolah_tbl', 'sekolah_tbl.id', '=', 'ppl_tbl.id_sekolah')
            ->select('ppl_tbl.id', 'ppl_tbl.name as nama_lowongan', 'sekolah_tbl.name as nama_sekolah')
            ->get();
        return Inertia::render('Admin/pages/PPL/lowonganppl/ListLowonganPPL', ['daftarlowonganppl' => $daftarlowonganppl]);
    }
    public function add()
    {
        return Inertia::render('Admin/pages/PPL/lowonganppl/AddLowonganPPL');
    }

    public function importlowonganppl(Request $request)
    {
        Excel::import(new LowonganPPLImport, $request->file('daftarlowonganppl'));
        return redirect()->route('admin.daftarlowonganppl');
    }
}
