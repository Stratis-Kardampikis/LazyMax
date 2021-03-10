<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class comment extends Model
{
    public $incrementing = false;
    protected $primaryKey = 'id';
    protected $table = "comments"; 
    public $timestamps = false;
    protected $fillable = [
        'id',
        'nametag',
        'comment',
        'nameuser',
        
    ];
}

