import {
  GET_POKEMON_BY_ID_SUCCESS
} from "../actions/pokemonActions";

const initialState = {
  all_details: []
};

export default function pokemonDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_BY_ID_SUCCESS:
      let tempId = action.payload.pokemon.id;
      let tempPokemon = [];
      tempPokemon[tempId] = action.payload.pokemon;
      return {
        ...state,
        all_details: {
          ...state.all_details,
          ...tempPokemon
        }
      };
    default:
      return state;
  }
}
