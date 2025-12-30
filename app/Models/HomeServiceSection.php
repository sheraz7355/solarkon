<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomeServiceSection extends Model
{
    //
     protected $guarded = [];

    // Automatically convert the services JSON to an array
    protected $casts = [
        'services' => 'array',
    ];
}
