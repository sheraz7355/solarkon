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
         Schema::create('media', function (Blueprint $table) {
        $table->id();
        $table->string('name');       // Original filename (e.g., "intro_video.mp4")
        $table->string('file_path');  // Storage path (e.g., "media/12345_intro.mp4")
        $table->string('url');        // Public URL (e.g., "http://site.com/storage/...")
        $table->string('mime_type')->nullable(); // IMPORTANT: "image/webp" or "video/mp4"
        $table->unsignedBigInteger('size')->nullable(); // File size in bytes
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};
