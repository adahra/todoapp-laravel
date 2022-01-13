<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJabatansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jabatans', function (Blueprint $table) {
            $table->id();
            $table->string('kode_jabatan', 10);
            $table->string('kode_perusahaan', 20);
            $table->string('nama', 25);
            $table->enum('status_aktif', ['Y', 'N'])->default('Y');
            $table->enum('status_remove', ['Y', 'N'])->default('N');
            $table->enum('status_create_tugas', ['Y', 'N'])->default('N');
            $table->integer('level');
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
        Schema::dropIfExists('jabatans');
    }
}
