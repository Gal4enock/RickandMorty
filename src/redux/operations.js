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
    .then(resp => {return resp.json()})
    .then(result => dispatch(actions.fetchLocationsSuccess(result.results)))
    .catch(err => dispatch(actions.fetchLocationsError(err)))
}

const filterLocations = (key, query) => (dispatch) => {
  dispatch(actions.filterLocationsRequest());
  fetch(URL + `/location/?${key}=${query}`)
    .then(res => res.json())
    .then(result => {
      console.log('result epis', result.results);
      dispatch(actions.filterLocationsSuccess(result.results))
    })
    .catch(err => dispatch(actions.filterLocationsError(err)))
}

const fetchEpisodes = (page) => (dispatch) => {
  dispatch(actions.fetchEpisodesRequest());
  fetch(URL + `/episode?page=${page}`)
    .then(resp => resp.json())  
    .then(result => {
      console.log('wtf2', result.results);
      dispatch(actions.fetchEpisodesSuccess(result.results))
    })
    .catch(err => dispatch(actions.fetchEpisodesError(err)))
}

const filterEpisodes = (key, query) => (dispatch) => {
  dispatch(actions.filterEpisodesRequest());
  fetch(URL + `/episode/?${key}=${query}`)
    .then(res => res.json())
    .then(result => {
      console.log('result epis', result.results);
      dispatch(actions.filterEpisodesSuccess(result.results))
    })
    .catch(err => dispatch(actions.filterEpisodesError(err)))
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
  filterCharacters,
  filterEpisodes,
  filterLocations
}