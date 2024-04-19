<?php

use App\Http\Controllers\TarefaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => '/v1/tarefa'], function(){
    Route::post('/criar', [TarefaController::class, 'criarTarefa']);
    Route::get('/lista', [TarefaController::class, 'listaTarefas']);
    Route::get('/especifica/{idTarefa}', [TarefaController::class, 'tarefaEspecifica']);
});
