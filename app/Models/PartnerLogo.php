<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class PartnerLogo extends Model {
    protected $fillable = ['logos'];
    protected $casts = ['logos' => 'array'];
}
