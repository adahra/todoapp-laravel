<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminBackofficesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_backoffices', function (Blueprint $table) {
            $table->id('id');
            $table->string('nama', 300);
            $table->string('username', 100);
            $table->string('email', 300);
            $table->longText('alamat');
            $table->string('telp_wa', 20);
            $table->string('password', 500);
            $table->char('jabatan', 1)->default('2');
            $table->enum('status_remove', ['N', 'Y'])->default('N');
            $table->dateTime('tgl_daftar');
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
        Schema::dropIfExists('admin_backoffices');
    }
}
