<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Waitlist extends Model
{
    protected $fillable = [
        'first_name',
        'last_name', 
        'email',
        'phone',
        'gender',
        'mail_sent_at',
    ];

    protected $casts = [
        'mail_sent_at' => 'datetime',
    ];
}
