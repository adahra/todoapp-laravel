<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDivisisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('divisis', function (Blueprint $table) {
            $table->id();
            $table->string('kode_perusahaan', 20);
            $table->string('kode_divisi', 10);
            $table->string('nama', 25);
            $table->string('keterangan', 50);
            $table->enum('status_aktif', ['Y', 'N'])->default('Y');
            $table->enum('status_remove', ['Y', 'N'])->default('N');
            $table->enum('status_terima_tugas_lain_divisi', ['Y', 'N'])->default('Y');
            $table->enum('status_kirim_tugas_lain_divisi', ['Y', 'N'])->default('Y');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('divisis');
    }
}
