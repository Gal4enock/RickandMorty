import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const characters = createReducer(
  {},
  {
    [actions.fetchCharactersSuccess]: (state, { payload }) => payload
  }
)

const episodes = createReducer(
  {},
  {
    [actions.fetchEpisodesSuccess]: (state, { payload }) => payload
  }
)

const locations = createReducer(
  {},
  {
    [actions.fetchLocationsSuccess]: (state, { payload }) => payload
  }
)

const watchList = createReducer(
  {},
  {
    [actions.fetchAddToWatchListSuccess]: (state, { payload }) => ({...state, payload})
  }
)

// eslint-disable-next-line
export default {
  characters,
  episodes,
  locations,
  watchList
}