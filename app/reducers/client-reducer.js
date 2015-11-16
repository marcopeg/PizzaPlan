
import { VOTE, RESET } from 'actions/client-actions';

export const initialState = {
    vote: null,
};

export function clientReducer(state = initialState, action) {
    var { type, payload } = action;
    switch (type) {
        case VOTE:  return setVote(state, payload);
        case RESET: return resetVote(state, payload);
        default:    return state;
    }
}

export function setVote(state, payload) {
    return {
        ...state,
        vote: payload.vote,
    };
}

export function resetVote(state, payload) {
    return {
        ...state,
        vote: null,
    };
}
