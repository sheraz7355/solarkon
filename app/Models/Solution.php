<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    //
    protected $fillable = ['system_key', 'capacities'];
    
    // Cast JSON to array automatically
    protected $casts = [
        'capacities' => 'array',
    ];
}
