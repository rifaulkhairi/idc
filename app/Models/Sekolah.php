<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sekolah extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'provinsi', 'kabupaten', 'kecamatan', 'username_supervisor'];

    protected $table = 'sekolah_tbl';
}
