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
        Schema::create('projects', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->string('slug')->unique(); // For URL: /project-details?id=... or /projects/slug
        $table->boolean('is_featured')->default(false); 

        $table->string('status')->default('Ongoing'); // Completed, Ongoing
        $table->string('tag'); // e.g. "Off-Grid Solutions"
        $table->text('description'); // Short desc for card
        $table->string('location');
        $table->string('date');
        $table->string('image'); // Main thumbnail
        
        // Detailed Data
        $table->text('overview')->nullable();
        $table->json('execution_points')->nullable(); // Array of strings
        // User said Results are covered by Impact, so we skip specific 'results' list
        
        // The 6 Impact Stats (Value, Label, Subtext)
        $table->json('impact_data')->nullable(); 
        
        $table->json('gallery_images')->nullable(); // Array of image URLs
        
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
