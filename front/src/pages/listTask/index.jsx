import React, { useState, useEffect } from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { formatStatus } from '../../helpers/format.js';

import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Button from '../../components/button/button.jsx';
import Modal from '../../components/modal/index.jsx';

import './style.css';

const ListTask = () => {

  const [modal, setModal] = useState(false);
  const [data, setData] = useState({ conteudo: { data: [], last_page: 1 } });
  const [dataTaskSpecifc, setDataTaskSpecifc] = useState({conteudo: {descricao: '', titulo: '', status: '', id:''}})
  const [page, setPage] = useState(1);

  const handlePageClick = (page) => {
    setPage(page.selected + 1);
  };

  const handleGetList = async (page) => {
    try {
      const params = {
        page: page
      };
      const response = await axios.get(`${process.env.REACT_APP_API}/v1/tarefa/lista`, { params });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetList(page);
  }, [page]);

  const handleGetTaskSpecific = async(idTask) => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_API}/v1/tarefa/especifica/${idTask}`)
      setDataTaskSpecifc(response.data)
      setModal(true)

    }catch(error){
      console.log(error)
    }
  }

  const navigate = useNavigate()

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título da tarefa</th>
            <th>Descrição</th>
            <th>Status da Tarefa</th>
            <th>Visualizar</th>
          </tr>
        </thead>

        <tbody>
          {data.conteudo.data.length > 0 &&
            data.conteudo.data.map((element) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.titulo}</td>
                <td>{element.descricao}</td>
                <td>{formatStatus(element.status)}</td>
                <td>
                  <Button onClick={() => handleGetTaskSpecific(element.id)}>Visualizar</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {data.conteudo.last_page > 1 && (    
          <ReactPaginate
            containerClassName="containerPaginate"
            breakLabel="..."
            nextLabel={<BsChevronDoubleRight />}
            onPageChange={handlePageClick}
            activeClassName="activeItemPaginate"
            pageClassName="itemsPaginate"
            previousClassName="itemsPaginate"
            nextClassName="itemsPaginate"
            pageRangeDisplayed={5}
            pageCount={data.conteudo.last_page}
            previousLabel= {<BsChevronDoubleLeft />}
            renderOnZeroPageCount={null}
          />
      )}

      <div className="wrapperButtonMaster">
        <div className="wrapperButton">
          <Button onClick={() => navigate('/')}>Voltar</Button>
        </div>
      </div>
      
      <Modal isOpen={modal} setModalOpen={() => setModal(!modal)}>
        <p>ID: {dataTaskSpecifc.conteudo.id}</p>
        <p>Título: {dataTaskSpecifc.conteudo.titulo}</p>
        <p>Descrição: {dataTaskSpecifc.conteudo.descricao}</p>
        <p>Status: {formatStatus(dataTaskSpecifc.conteudo.status)}</p>
      </Modal>   
    </div>
  );
};

export default ListTask;