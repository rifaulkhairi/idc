<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    use HasFactory;

    // protected $fillable = ['nim',
    protected $fillable = [
        'nim',
        'id_prodi',
        'no_hp_wa',
        'id_tempat_kpm',
        'id_lowongan_ppl',
        'nilai_supervisor_ppl',
        'nilai_superviosr_kpm',
        'nilai_keuchik',
        'nilai_pamong',
        'link_instrument_penilaian'


    ];

    protected $table = 'mahasiswa_tbl';
}
