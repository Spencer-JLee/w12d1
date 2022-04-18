import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, action.pokemon, state);
    case RECEIVE_A_POKEMON:
      let pokemon = action.pokemon.pokemon;
      pokemon.moves = action.pokemon.moves;
      debugger;
      return Object.assign({}, state, {[pokemon.id]:pokemon});
  default:
    return state;
  }
}
  
export default pokemonReducer;
