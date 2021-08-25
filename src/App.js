import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './index.css';
import Navigation from './components/Navigation'
import CharactersPage from './pages/CharactersPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationsPage from './pages/LocationsPage';
import MyWatchListPage from './pages/MyWatchListPage';

function App() {
  return (
    <div className={style.App}>
      <Navigation />
      <hr />
      <Suspense fallback={ <h1>Loading...</h1> }>
      <Switch>
        <Route path="/" exact component={CharactersPage} />
        <Route path="/epiodes" exact component={EpisodesPage} />
        <Route path="/locations" component={LocationsPage} />
        <Route path="/watch_list" component={MyWatchListPage}/>
      </Switch>
      </Suspense>
    </div>
  );
}

export default App;
