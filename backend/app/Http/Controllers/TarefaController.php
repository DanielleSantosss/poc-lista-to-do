<?php

namespace App\Http\Controllers;

use App\Http\Requests\CriarTarefaRequest;
use App\Http\Requests\TarefaEspecificaRequest;
use App\Models\TarefasModel;
use Illuminate\Http\Request;

class TarefaController extends Controller
{
    private $tarefasModel;
    public function __construct(TarefasModel $tarefasModel){
        $this->tarefasModel = $tarefasModel;
    }
    public function criarTarefa(CriarTarefaRequest $request){
        $dados = [
            'titulo'    => $request->titulo,
            'descricao' => $request->descricao,
            'status'    => $request->status
        ];


        $this->tarefasModel->create($dados);

        $resposta = [
            'status' => 201,
            'mensagem' => 'Tarefa cadastrada com sucesso'
        ];

        return response()->json($resposta, 201);
    }

    public function listaTarefas(){
        $listaTarefas =  $this->tarefasModel->paginate(10);

        $resposta = [
            'status'    => 200,
            'mensagem'  => 'Lista de tarefas',
            'conteudo'  => $listaTarefas
        ];

        return response()->json($resposta, 200);
    }

    public function tarefaEspecifica(string $idTarefa)
    {
        $tarefaEspecifica = $this->tarefasModel->where('id', $idTarefa)->first();

        $resposta = [
            'status'    => 200,
            'mensagem'  => 'Encontrado a tarefa específica',
            'conteudo'  => $tarefaEspecifica
        ];

        return response()->json($resposta, 200);

    }
}
