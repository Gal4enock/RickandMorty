import React from 'react';
import ReactModal from 'react-modal';

import style from './Card.module.css';
// import Modal from '../Modal/Modal.jsx';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Card = function ({ obj }) {
  // console.log(obj);
const [modalIsOpen, setIsOpen] = React.useState(false);

 function togleModal() {
    modalIsOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <div className={style.CardWrapper} onClick={togleModal}>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={togleModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
        closeTimeoutMS={200}
      >
        <ul className={style.modal}>
          <li>name: {obj.name}</li>
          <li>status: {obj.status}</li>
          <li>gender: {obj.gender}</li>
          <li>origin: {obj.origin.name}</li>
          <li>number of episodes: {obj.episode.length}</li>
          <li>created {obj.created}</li>
        </ul>
      </ReactModal>
      <div >
        <img className={style.Picture} width='400' height='300' src={obj.image ? obj.image : 'https://www.meme-arsenal.com/memes/334dedec90ef3de6cbef0f22e597798e.jpg'} alt="" />
        <div className={style.About}>
          <h2><span>{obj.name}</span>  ({obj.species})</h2>
          <p>Origin: {obj.origin.name} </p>
          <p>Gender: {obj.gender} </p>
        </div>
      </div>
    </div>
  );
};



export default Card;
