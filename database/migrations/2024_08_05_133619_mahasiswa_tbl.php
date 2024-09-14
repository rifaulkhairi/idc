<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mahasiswa_tbl', function (Blueprint $table) {
            $table->id();
            $table->string('nim')->unique();
            $table->unsignedBigInteger('id_prodi')->nullable();
            $table->string('no_hp_wa')->nullable();
            $table->unsignedBigInteger('id_tempat_kpm')->nullable();
            $table->unsignedBigInteger('id_lowongan_ppl')->nullable();
            $table->double('nilai_supervisor_ppl')->nullable();
            $table->double('nilai_supervisor_kpm')->nullable();
            $table->double('nilai_keuchik')->nullable();
            $table->double('nilai_pamong')->nullable();
            $table->timestamps();
            $table->string('link_instrument_penilaian')->nullable();



            $table->foreign('nim')->references('username')->on('users')->onDelete('cascade');
            $table->foreign('id_prodi')->references('id')->on('prodi_tbl')->onDelete('set null');
            $table->foreign('id_tempat_kpm')->references('id')->on('tempat_kpm_tbl')->onDelete('set null');
            $table->foreign('id_lowongan_ppl')->references('id')->on('ppl_tbl')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mahasiswa_tbl');
    }
};
