import {
  GET_ALL_POKEMON_SUCCESS
} from "../actions/pokemonActions";

const initialState = {
  list: []
};

export default function pokemonListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMON_SUCCESS:
      return {
        ...state,
        list: action.payload.list.pokemon_entries
      };
    default:
      return state;
  }
}
