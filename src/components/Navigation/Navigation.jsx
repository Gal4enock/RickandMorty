import React from 'react';
import { Link } from 'react-router-dom';

import style from './Navigation.module.css'


//import { Test } from './Navigation.styles';

const Navigation = () => (
  <div className="NavigationWrapper">
    <ul className={style.List}>
      <li><Link exact to="/" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
      Characters</Link></li>
      <li><Link exact to="/episodes" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
      Episodes</Link></li>
      <li><Link exact to="/locations" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
        Locations</Link></li>
      <li><Link exact to="/watch_list" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
      My Watch List</Link></li>
    </ul>
  </div>
);



export default Navigation;
