<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    //
     use HasFactory;

    // This allows us to save these fields via the Controller
    protected $fillable = [
        'name', 
        'file_path', 
        'url', 
        'mime_type', 
        'size'
    ];
}
