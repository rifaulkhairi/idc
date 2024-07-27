<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LowonganPPL extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'qouta', 'id_tempat_ppl', 'id_prodi'];

    protected $table = 'lowongan_ppl_tbl';
    
}
