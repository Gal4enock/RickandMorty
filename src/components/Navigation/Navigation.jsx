import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navigation.module.css'

const Navigation = () => (
  <div className="NavigationWrapper">
    <ul className={style.List}>
      <li><NavLink exact to="/" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
      Characters</NavLink></li>
      <li><NavLink exact to="/episodes" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
      Episodes</NavLink></li>
      <li><NavLink exact to="/locations" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
        Locations</NavLink></li>
      <li><NavLink exact to="/watch_list" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
      My Watch List</NavLink></li>
    </ul>
  </div>
);

export default Navigation;
