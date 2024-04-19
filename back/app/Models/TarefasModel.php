<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TarefasModel extends Model
{
    use HasFactory;

    const CREATED_AT= 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $table = 'tarefas';

    protected $fillable = [
        'id',
        'titulo',
        'descricao',
        'status',
        'created_at',
        'updated_at'
    ];
}
