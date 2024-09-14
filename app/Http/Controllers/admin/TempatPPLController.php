<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Imports\TempatPPLImport;
use App\Models\Sekolah;
use App\Models\TempatPPL;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class TempatPPLController extends Controller
{
    public function index(Request $request)
    {
        $daftartempatppl = Sekolah::join('users', 'users.username', '=', 'sekolah_tbl.username_supervisor')
            ->select('sekolah_tbl.id', 'sekolah_tbl.name as nama_sekolah', 'users.name')
            ->get();

        return Inertia::render('Admin/pages/PPL/tempatppl/ListTempatPPL', ['daftartempatppl' => $daftartempatppl]);
    }
    public function add()
    {
        return Inertia::render('Admin/pages/PPL/tempatppl/AddTempatPPL');
    }

    public function importtempatppl(Request $request)
    {
        Excel::import(new TempatPPLImport, $request->file('daftartempatppl'));
        return redirect()->route('admin.daftartempatppl');
    }

    public function edit($id)
    {
        $tempatppl = Sekolah::find($id);
        // dd($tempatppl);
        $supervisor = User::where('users.role', 'supervisor')->select('users.username', 'users.name')->get();
        // dd($supervisor);
        return Inertia::render('Admin/pages/PPL/tempatppl/EditTempatPPL', [
            'supervisordata' => $supervisor,
            'tempatppl' => $tempatppl
        ]);
    }

    public function update(Request $request, $id)
    {
        $sekolah = Sekolah::find($id);
        $result = $sekolah->update([
            'username_supervisor' => $request->username_supervisor,
            'name' => $request->name,
        ]);
        if ($result) {
            return redirect('/admin/daftartempatppl')->with('message', ['success' => 'Data Sekolah Berhasil Diupdate']);
        }
        return redirect('/admin/daftartempatppl')->with('message', ['error' => 'Terjadi Kesalahan']);
    }
}
