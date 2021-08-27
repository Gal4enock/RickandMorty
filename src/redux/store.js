import { configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage'
import reducers from './reducers';


// const watchPersister = {
//   key: 'watch',
//   storage,
// }

export const store = configureStore({
  reducer: {
    characters: reducers.characters,
    episodes: reducers.episodes,
    locations: reducers.locations,
    watchList: reducers.watchList
  }
});

export default store