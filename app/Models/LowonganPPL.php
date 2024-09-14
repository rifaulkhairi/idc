<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LowonganPPL extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'id_sekolah', 'id_prodi'];

    protected $table = 'ppl_tbl';
}
