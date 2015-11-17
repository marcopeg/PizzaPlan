
import { PIZZA_TYPES, PIZZA_TYPE_ERROR, isValidPizza } from 'lib/pizza-types';

export const SET = 'dashboard@set';
export const RESET = 'dashboard@reset';

export function set(type, value) {
    if (!isValidPizza(type)) {
        throw PIZZA_TYPE_ERROR;
    }

    return {
        type: SET,
        payload: { type, value },
    };
}

export function reset() {
    return {
        type: RESET,
        payload: { time: Date.now() },
    };
}
