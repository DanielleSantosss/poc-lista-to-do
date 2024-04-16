import { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css'

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [toDos, setToDos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Não iniciado');

  const handleChangeStatus = (newStatus) => {
    setStatus(newStatus)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    console.log('Enviou!')
  };

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
              value={title || ''}
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
              value={description || ''}
              required
            />
          </div>

          <div className="statusDot">
            <p>Status: {status}</p>
            <label>
              <input 
                type="radio"
                value="Não iniciado"
                checked={status === 'Não iniciado'}
                onChange={(e) => handleChangeStatus(e.target.value)}
              />
              Não Iniciado
            </label>
            <label>
              <input
                type="radio"
                value="Em andamento"
                checked={status === 'Em andamento'}
                onChange={(e) => handleChangeStatus(e.target.value)}
              />
              Em Andamento
            </label>
            <label>
              <input
                type="radio"
                value="Concluído"
                checked={status === 'Concluído'}
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
        <Link to='pendingTasks'>
            <button>Ir para tarefas pendentes</button>
        </Link>     
      </div>

    </div>
  );
}

export default App;