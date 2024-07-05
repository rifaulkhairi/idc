<?php

namespace App\Http\Controllers;

use App\Models\TempatPPL;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TempatPPLController extends Controller
{
    public function index(){
        $tempatppl = TempatPPL::leftJoin('supervisor_tbl', 'tempat_ppl_tbl.id_supervisor', '=', 'supervisor_tbl.supervisor_id')
            ->select('tempat_ppl_tbl.*', 'supervisor_tbl.nama as nama_supervisor')
            ->get(); // Execute the query to retrieve the results
                
        return Inertia::render('Admin/pages/tempatPPL/TempatPPL', ['tempat_ppl'=> $tempatppl]);

    }

    public function store(){

    }

    public function addTempatPPL(){

    }
    
}
