<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MethodologySection extends Model
{
    
    use HasFactory;

    protected $fillable = [
        'main_heading',
        'main_description',
        'steps',
    ];

    protected $casts = [
        'steps' => 'array',
    ];


}
