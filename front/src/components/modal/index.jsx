import React from 'react';
import './style.css';

import { MdClose } from 'react-icons/md';

const Modal = ({ isOpen, children, setModalOpen }) => {
  const closeModal = (e) => {
      e.preventDefault();
      setModalOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className='backgroundStyle'>
          <div className='modal'>
            <div>
                <MdClose className='mdClose' onClick={closeModal}></MdClose>
            </div>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;