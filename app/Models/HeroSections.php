<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroSections extends Model
{
    /** @use HasFactory<\Database\Factories\HeroSectionsFactory> */
    use HasFactory;

    protected $guarded = [];

     protected $casts = [
        'slider_url' => 'array',
        'stats' => 'array',
    ];
}
