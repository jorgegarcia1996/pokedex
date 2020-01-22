import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonReducer';
import pokemonDetailsReducer from './pokemonDetailsReducer';

export default combineReducers({
  pokemonListReducer,
  pokemonDetailsReducer
})