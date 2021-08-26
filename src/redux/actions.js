import { createAction } from '@reduxjs/toolkit';

const fetchCharactersRequest = createAction('characters/fetchRequest');
const fetchCharactersSuccess = createAction('characters/fetchSuccess');
const fetchCharactersError = createAction('characters/fetchError');

const filterCharactersRequest = createAction('filter/fetchRequest');
const filterCharactersSuccess = createAction('filter/fetchSuccess');
const filterCharactersError = createAction('filter/fetchError');

const fetchEposidesRequest = createAction('eposides/fetchRequest');
const fetchEposidesSuccess = createAction('eposides/fetchSuccess');
const fetchEposidesError = createAction('eposides/fetchError');

const fetchLocationsRequest = createAction('locations/fetchRequest');
const fetchLocationsSuccess = createAction('locations/fetchSuccess');
const fetchLocationsError = createAction('locations/fetchError');

const fetchAddToWatchListRequest = createAction('watchList/fetchRequest');
const fetchAddToWatchListSuccess = createAction('watchList/fetchSuccess');
const fetchAddToWatchListError = createAction('watchList/fetchError');

// eslint-disable-next-line
export default {
  fetchCharactersRequest,
  fetchCharactersSuccess,
  fetchCharactersError,
  fetchEposidesRequest,
  fetchEposidesSuccess,
  fetchEposidesError,
  fetchLocationsRequest,
  fetchLocationsSuccess,
  fetchLocationsError,
  fetchAddToWatchListRequest,
  fetchAddToWatchListSuccess,
  fetchAddToWatchListError,
  filterCharactersRequest,
  filterCharactersSuccess,
  filterCharactersError
}

