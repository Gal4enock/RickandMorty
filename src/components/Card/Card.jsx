import React from 'react';
import { Component } from 'react';

import style from './Card.module.css';
import Modal from '../Modal/Modal.jsx';


class Card extends Component {
  state = {
   onModalOpen: false
 }

  modalToggle = () => {
    this.state.onModalOpen ? this.setState({onModalOpen: false}) : this.setState({onModalOpen: true})
  }
  
  render() {
    const obj = this.props.obj;
    return (
      <div className={style.CardWrapper} onClick={this.modalToggle}>
        <div >
          <img className={style.Picture} width='400' height='300' src={obj.image ? obj.image: 'https://www.meme-arsenal.com/memes/334dedec90ef3de6cbef0f22e597798e.jpg'} alt="" />
        <div className={style.About}>
          <h2><span>{obj.name}</span>  ({obj.species})</h2>
          <p>Origin: {obj.origin.name} </p>
          </div>
        </div>
        {this.state.onModalOpen ? <Modal obj = {obj}/> : ''}
      </div>
    )
  }
};



export default Card;
