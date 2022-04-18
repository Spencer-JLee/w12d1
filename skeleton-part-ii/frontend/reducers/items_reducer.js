import { RECEIVE_ALL_ITEMS } from "../actions/items_actions";
import { RECEIVE_A_POKEMON } from "../actions/pokemon_actions";

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_ITEMS:
            return Object.assign({}, state.entities.items);
        case RECEIVE_A_POKEMON:
            return Object.assign({}, action.pokemon.items);
        default:
            return state;
    }
};

export default itemsReducer;