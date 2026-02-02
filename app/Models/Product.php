<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
     use HasFactory;
    protected $fillable = [
        'title', 'brand', 'type', 'voltage', 'unit',
        'warranty', 'description', 
        'original_price', 'discount_price', 
        'image', 'gallery_images', 
        'is_active'
    ];

    protected $casts = [
        'gallery_images' => 'array',
    ];
}
