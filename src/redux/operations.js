import actions from './actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';
const URL = 'https://rickandmortyapi.com/api'

const fetchCharacters = (page) => (dispatch) => {
  dispatch(actions.fetchCharactersRequest());
  axios
    .get(`/character?page=${page}`)
    .then(result => dispatch(actions.fetchCharactersSuccess(result.data)))
    // .then(resp => {
    //  
    //  return resp.json
    // })
    .catch(err => dispatch(actions.fetchCharactersError(err)))
}

const filterCharacters = (key, query) => (dispatch) => {
  console.log('dada');
  dispatch(actions.filterCharactersRequest());
  fetch(URL + `/character/?${key}=${query}`)
    .then(res => res.json())
    .then(result => {
      console.log('result', result.results);
      dispatch(actions.filterCharactersSuccess(result.results))
    })
    .catch(err => dispatch(actions.filterCharactersError(err)))
}

const fetchLocations = (page) => (dispatch) => {
  dispatch(actions.fetchLocationsRequest());
  fetch(URL + `/location?page=${page}`)
    .then(resp => {
      console.log(resp);
     return resp.json
    })
    .then(result => dispatch(actions.fetchLocationsSuccess(result)))
    .catch(err => dispatch(actions.fetchLocationsError(err)))
}

const fetchEpisodes = (page) => (dispatch) => {
  dispatch(actions.fetchEpisodesRequest());
  fetch(URL + `/episode?page=${page}`)
    .then(resp => resp.json)
    .then(result => dispatch(actions.fetchEpisodesSuccess(result.data)))
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
  fetchAddToWatchList,
  filterCharacters
}