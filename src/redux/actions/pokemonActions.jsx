import Axios from "axios";

export const GET_ALL_POKEMON_SUCCESS = "GET_ALL_POKEMON_SUCCESS";
export const GET_POKEMON_BY_ID_SUCCESS = "GET_POKEMON_BY_ID_SUCCESS";

const BASE_URL = "https://pokeapi.co/api/v2";

export const getAllPokemonSuccess = list => ({
  type: GET_ALL_POKEMON_SUCCESS,
  payload: { list }
});

export const getPokemonByIdSuccess = pokemon => ({
  type: GET_POKEMON_BY_ID_SUCCESS,
  payload: { pokemon }
});

export function getAllPokemonList() {
  return dispatch => {
    let path = BASE_URL + "/pokedex/kanto";
    return Axios.get(path).then(res => {
      dispatch(getAllPokemonSuccess(res.data));
    });
  };
}

export function getAllPokemonDetails(id) {
  return dispatch => {
    let path = BASE_URL + "/pokemon/" + id;
    return Axios.get(path).then(res => {
      dispatch(getPokemonByIdSuccess(res.data));
    });
  };
}