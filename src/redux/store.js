import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducers';

export const store = configureStore({
  reducer: {
    characters: reducers.characters,
    episodes: reducers.episodes,
    locations: reducers.locations,
    watchList: reducers.watchList
  }
});

export default store