<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('brand'); // Brand dropdown
            $table->string('type');  // System Type (On-Grid, etc)
            
            // Capacity
            $table->string('voltage')->nullable();
            $table->string('unit')->default('kW');

            $table->string('warranty')->nullable();
            $table->text('description');
            
            // Prices (Both Nullable now)
            $table->string('original_price')->nullable();
            $table->string('discount_price')->nullable();
            
            // Images
            $table->string('image')->nullable(); // Main Card Image
            $table->json('gallery_images')->nullable(); // Gallery for details
            
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};