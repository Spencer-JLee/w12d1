import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import { selectItems, selectMoves } from '../../reducers/selectors';

const mapStateToProps = (state, myProps) => {
    debugger;
    return {
        items: selectItems(state),
        moves: selectMoves(state, myProps.match.params.id)
    };
};

export default connect(mapStateToProps,null)(PokemonDetail);