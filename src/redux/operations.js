import actions from './actions';

const URL = 'https://rickandmortyapi.com/api/';

const fetchCharacters = (page=1) => (dispatch) => {
  dispatch(actions.fetchCharactersRequest());
  fetch(URL + `/character?page=${page}`)
    .then(resp => resp.json)
    .then(result => dispatch(actions.fetchCharactersSuccess(result)))
    .catch(err => dispatch(actions.fetchCharactersError(err)))
}

const fetchLocations = (page=1) => (dispatch) => {
  dispatch(actions.fetchLocationsRequest());
  fetch(URL + `/location?page=${page}`)
    .then(resp => resp.json)
    .then(result => dispatch(actions.fetchLocationsSuccess(result)))
    .catch(err => dispatch(actions.fetchLocationsError(err)))
}

const fetchEpisodes = (page=1) => (dispatch) => {
  dispatch(actions.fetchEpisodesRequest());
  fetch(URL + `/episode?page=${page}`)
    .then(resp => resp.json)
    .then(result => dispatch(actions.fetchEpisodesSuccess(result)))
    .catch(err => dispatch(actions.fetchEpisodesError(err)))
}

const fetchAddToWatchList = (name) => (dispatch) => {
  dispatch(actions.fetchAddToWatchListRequest());
  fetch(URL + `/episode?name=${name}`)
    .then(resp => resp.json)
    .then(result => dispatch(actions.fetchAddToWatchListSuccess(result)))
    .catch(err => dispatch(actions.fetchAddToWatchListError(err)))
}

// eslint-disable-next-line
export default {
  fetchCharacters,
  fetchLocations,
  fetchEpisodes,
  fetchAddToWatchList
}