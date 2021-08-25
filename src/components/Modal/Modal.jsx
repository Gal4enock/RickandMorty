import style from './Modal.module.css';

const Modal = ({obj}) => {

  return(
    <ul className={style.modal}>
      <li>name: { obj.name}</li>
      <li>status: { obj.status}</li>
      <li>gender: { obj.gender}</li>
      <li>origin: {obj.origin.name}</li>
      <li>number of episodes: {obj.episode.length}</li>
      <li>created { obj.created}</li>
   </ul>
  )
}

export default Modal