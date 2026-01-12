<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
     use HasFactory;
    protected $fillable = [
        'title', 'type', 'voltage',
        'annual_output', 'warranty',
         'description', 
        'original_price', 'discount_price', 'image', 'is_active'
    ];
}
