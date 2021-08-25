import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import style from './index.css';
import CharactersPage from './pages/CharactersPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationsPage from './pages/LocationsPage';
import MyWatchListPage from './pages/MyWatchListPage';
import Navigation from './components/Navigation';

function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <hr />
        <Suspense fallback={ <h1>Loading...</h1> }>
          <Switch>
            <Route path="/" exact component={CharactersPage} />
            <Route path="/episodes" exact component={EpisodesPage} />
            <Route path="/locations" component={LocationsPage} />
            <Route path="/watch_list" component={MyWatchListPage}/>
          </Switch>
          </Suspense>
        </BrowserRouter>
  );
}

export default App;
