<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

final class Student extends Model
{
    use HasUuids;

    protected $guarded = [];
    protected $casts = ['skills' => 'array', 'technologies' => 'array', 'experiences' => 'array', 'projects' => 'array', 'preferred_cities' => 'array'];
}
