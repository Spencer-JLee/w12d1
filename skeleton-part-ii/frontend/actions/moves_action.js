import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_MOVES = "RECEIVE_ALL_MOVES";
export const RECEIVE_A_MOVE = "RECEIVE_A_MOVE";

export const receiveAllMoves = (moves) => {
    return {
        type: RECEIVE_ALL_MOVES,
        moves
    };
};

export const receiveAMove = (move) => ({
    type: RECEIVE_A_MOVE,
    move
});

export const requestAllMoves = () => (dispatch) => (
    APIUtil.fetchAllMoves().then(moves => dispatch(receiveAllMoves(moves)))
);

export const requestAMove = (moveId) => (dispatch) => (
    APIUtil.fetchAMove(moveId).then(move => dispatch(receiveAMove(move)))
);