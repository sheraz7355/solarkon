<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    //
    protected $guarded = [];

    protected $casts = [
        'data' => 'array', // Cast the JSON 'data' field to an array
    ];

}
