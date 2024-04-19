import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import Button from '../../components/button/button.jsx';
import Toast from '../../components/toast/index.jsx'

import './style.css'

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('NaoIniciado');

  const handleChangeStatus = (newStatus) => {
    setStatus(newStatus);
  };

  const setInitialStateForm = () => {
    setTitle('')
    setDescription('')
    setStatus('NaoIniciado')
  }

  const handleCreateTask = async(body) => {
    try{
      const response = await axios.post(`${process.env.REACT_APP_API}/v1/tarefa/criar`, body)
      Toast({message: 'Tarefa criada com sucesso!', type:'success'})
      setInitialStateForm()
      return response.data    
    }catch(error){
      Toast({message: 'Falha ao cadastrar tarefa!', type:'error'})
    }
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      titulo: title,
      descricao: description,
      status: status
    }

    handleCreateTask(data)
  };

  const navigate = useNavigate()

  return (
    <div className='all'>
      <div className='todoHeader'>
        <h1>Lista To Do</h1>
      </div>

      <div className='formToDo'>
        <h2>Insira sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className='formControl'>
            <label htmlFor='title'>Qual tarefa você quer realizar?</label>
            <input
              type='text'
              name='title'
              placeholder='Título da tarefa'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>

          <div className='formControl'>
            <label htmlFor='title'>O que você precisa fazer nessa tarefa?</label>
            <input
              type='text'
              name='description'
              placeholder='Descreva detalhadamente sua tarefa'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>

          <div>
                <label>
                  <input
                    type="radio"
                    value="NaoIniciado"
                    checked={status === 'NaoIniciado'}
                    onChange={(e) => handleChangeStatus(e.target.value)}
                  />
                  Não Iniciado
                </label>
                <label>
                  <input
                    type="radio"
                    value="EmAndamento"
                    checked={status === 'EmAndamento'}
                    onChange={(e) => handleChangeStatus(e.target.value)}
                  />
                  Em Andamento
                </label>
                <label>
                  <input
                    type="radio"
                    value="Concluido"
                    checked={status === 'Concluido'}
                    onChange={(e) => handleChangeStatus(e.target.value)}
                  />
                  Concluído
                </label>
              </div>

          <input type='submit' value='Criar Tarefa' />
        </form>
        
      </div>
        <div className='listToDo'>
          <h2>Deseja visualizar suas tarefas?</h2>
        <div className="wrapperButton">
            <Button onClick={() => navigate('/pendingTasks')}>Ir para tarefas pendentes</Button>
        </div>
      </div>
    </div>
  );
}

export default App;