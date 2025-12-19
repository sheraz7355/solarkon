<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('methodology_sections', function (Blueprint $table) {
            $table->id();
            
            $table->string('main_heading')->nullable()->default('Our Process Flow');
            
            $table->text('main_description')->nullable()->default('At Solarkon, we follow a systematic approach to ensure your solar installation is seamless and reliable. Each step is designed to provide maximum efficiency and transparency.');
            
            //  stored as a JSON Array
            // title, description, duration for all steps
            $table->json('steps')->nullable(); 
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('methodology_sections');
    }
};