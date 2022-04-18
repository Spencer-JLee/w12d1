import { RECEIVE_ALL_MOVES } from "../actions/moves_action";
import { RECEIVE_A_POKEMON } from "../actions/pokemon_actions";

const movesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_MOVES:
            return Object.assign({}, state.entities.moves);
        case RECEIVE_A_POKEMON:
            return Object.assign({}, action.pokemon.moves);
        default:
            return state;
        
    }
};

export default movesReducer;