import { createAction } from '@reduxjs/toolkit';

const fetchCharactersRequest = createAction('characters/fetchRequest');
const fetchCharactersSuccess = createAction('characters/fetchSuccess');
const fetchCharactersError = createAction('characters/fetchError');

const filterCharactersRequest = createAction('filter/fetchRequest');
const filterCharactersSuccess = createAction('filter/fetchSuccess');
const filterCharactersError = createAction('filter/fetchError');

const fetchEpisodesRequest = createAction('episodes/fetchRequest');
const fetchEpisodesSuccess = createAction('episodes/fetchSuccess');
const fetchEpisodesError = createAction('episodes/fetchError');

const filterEpisodesRequest = createAction('epfilter/fetchRequest');
const filterEpisodesSuccess = createAction('epfilter/fetchSuccess');
const filterEpisodesError = createAction('epfilter/fetchError');

const fetchLocationsRequest = createAction('locations/fetchRequest');
const fetchLocationsSuccess = createAction('locations/fetchSuccess');
const fetchLocationsError = createAction('locations/fetchError');

const filterLocationsRequest = createAction('locfilter/fetchRequest');
const filterLocationsSuccess = createAction('locfilter/fetchSuccess');
const filterLocationsError = createAction('locfilter/fetchError');

const fetchAddToWatchListRequest = createAction('watchList/fetchRequest');
const fetchAddToWatchListSuccess = createAction('watchList/fetchSuccess');
const fetchAddToWatchListError = createAction('watchList/fetchError');

// eslint-disable-next-line
export default {
  fetchCharactersRequest,
  fetchCharactersSuccess,
  fetchCharactersError,
  fetchEpisodesSuccess,
  fetchEpisodesRequest,
  fetchEpisodesError,
  fetchLocationsRequest,
  fetchLocationsSuccess,
  fetchLocationsError,
  fetchAddToWatchListRequest,
  fetchAddToWatchListSuccess,
  fetchAddToWatchListError,
  filterCharactersRequest,
  filterCharactersSuccess,
  filterCharactersError,
  filterEpisodesRequest,
  filterEpisodesSuccess,
  filterEpisodesError,
  filterLocationsRequest,
  filterLocationsSuccess,
  filterLocationsError
}

