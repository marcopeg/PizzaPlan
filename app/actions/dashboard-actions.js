
import { PIZZA_TYPES, PIZZA_TYPE_ERROR, isValidPizza } from 'lib/pizza-types';

export const SET_VOTE = 'dashboard@setVote';
export const RESET = 'dashboard@reset';

export function setVote(type, value) {
    if (!isValidPizza(type)) {
        throw PIZZA_TYPE_ERROR;
    }

    return {
        type: SET_VOTE,
        payload: { type, value },
    };
}

export function reset() {
    return {
        type: RESET,
        payload: { time: Date.now() },
    };
}
