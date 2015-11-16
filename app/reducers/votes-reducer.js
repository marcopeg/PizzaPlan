
import { SET_VOTE, RESET } from 'actions/dashboard-actions';

export const initialState = {
    normal: 0,
    veggie: 0,
    vegan: 0,
    gfree: 0,
    nopizza: 0,
};

export function votesReducer(state = initialState, action) {
    var { type, payload } = action;
    switch (type) {
        case SET_VOTE:  return setVote(state, payload);
        case RESET:     return resetVote(state, payload);
        default:        return state;
    }
}

export function setVote(state, payload) {
    var { type, value } = payload;
    return {
        ...state,
        [type]: value,
    };
}

export function resetVote(state, payload) {
    return { ...initialState };
}
