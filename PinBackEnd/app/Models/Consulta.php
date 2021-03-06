<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use App\Http\Models\Revision;

class Consulta extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'consultas';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
    ];

}

