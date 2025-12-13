<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroSections extends Model
{
    use HasFactory;

    // Allow mass assignment
    protected $guarded = [];

    // Automatically convert JSON from DB to PHP Array
    protected $casts = [
        'slider_url' => 'array',
        'stats'      => 'array',
    ];
}