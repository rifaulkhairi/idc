<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LamaranPPL extends Model
{
    use HasFactory;
    protected $fillable = ['nim', 'id_lowongan_ppl'];

    protected $table = 'lamaranppl_tbl';
}
