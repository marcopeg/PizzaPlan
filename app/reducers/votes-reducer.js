
import { SET_VOTE, RESET } from 'actions/dashboard-actions';

import {
    PIZZA_NORMAL,
    PIZZA_VEGGIE,
    PIZZA_VEGAN,
    PIZZA_GFREE,
    PIZZA_NOPE,
} from 'lib/pizza-types';

export const initialState = {
    [PIZZA_NORMAL]: 0,
    [PIZZA_VEGGIE]: 0,
    [PIZZA_VEGAN]: 0,
    [PIZZA_GFREE]: 0,
    [PIZZA_NOPE]: 0,
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
