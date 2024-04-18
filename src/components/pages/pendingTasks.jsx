import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PendingTasks = () => {
  const [status, setStatus] = useState('Não iniciado');

  const handleChangeStatus = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título da tarefa</th>
            <th>Descrição</th>
            <th>Status da Tarefa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Lavar o Carro</td>
            <td>lavar com sabão e água</td>
            <td>
              <div>
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
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Fazer Mercado</td>
            <td>Comprar frutas, legumes e carnes</td>
            <td>
              <div>
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
            </td>
          </tr>
        </tbody>
      </table>
      <Link className='linkButton' to='/'>
        <button className='buttonBack'>Voltar</button>
      </Link>
    </div>
  );
};

export default PendingTasks;