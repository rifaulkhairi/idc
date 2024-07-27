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
        'provinsi',
        'kabupaten',
        'kecamatan',
        'desa',
        'provinsi_now',
        'kabupaten_now',
        'kecamatan_now',
        'desa_now',
        'ipk',
        'khs',
        'jk',
        'no_hp_wa',
        'nilai_microteaching',
    ];

    protected $table = 'mahasiswa_tbl';
    
}
