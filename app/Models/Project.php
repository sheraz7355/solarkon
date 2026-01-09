<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    use HasFactory;
    protected $guarded = [];

    protected $casts = [
        'execution_points' => 'array',
        'impact_data' => 'array',
        'gallery_images' => 'array',
    ];
}
