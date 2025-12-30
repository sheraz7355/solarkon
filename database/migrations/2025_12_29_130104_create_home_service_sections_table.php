<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('home_service_sections', function (Blueprint $table) {
        $table->id();
        $table->string('heading_green')->nullable();
        $table->string('heading_dark')->nullable();
        $table->text('description')->nullable();
        $table->json('services')->nullable(); // We store the 4 cards as JSON
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('home_service_sections');
    }
};
