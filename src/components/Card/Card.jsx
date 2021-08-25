import React from 'react';

import style from './Card.module.css'


const Card = ({ obj, img }) => {

  return (
    <div className={style.CardWrapper}>
      <div>
        <img className={style.Picture} width='400' height='300' src={img ? img: 'https://www.meme-arsenal.com/memes/334dedec90ef3de6cbef0f22e597798e.jpg'} alt="" />
      </div>
      <div className={style.About}>
        <h2><span>{obj.title}</span>  ({obj.release_date.split("-")[0]})</h2>
        <p>User Score: {+ obj.vote_average * 10}% </p>
        <h3>Overview</h3>
        <p className={style.OverviewBlock}>{obj.overview}</p>
        <h3>Genres</h3>
        <p className={style.GenresBlock}>
        {obj.genres.map(el => <span className={style.Genres} key={el.id}>{el.name}</span>)}
        </p>
      </div>
    </div>
  )
};



export default Card;
