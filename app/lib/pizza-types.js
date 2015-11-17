
export const PIZZA_NORMAL = 'pizza@normal';
export const PIZZA_VEGGIE = 'pizza@veggie';
export const PIZZA_VEGAN = 'pizza@vegan';
export const PIZZA_GFREE = 'pizza@gfree';
export const PIZZA_NOPE = 'pizza@nope';

export const PIZZA_TYPES = [
    PIZZA_NORMAL,
    PIZZA_VEGGIE,
    PIZZA_VEGAN,
    PIZZA_GFREE,
    PIZZA_NOPE,
];

export const PIZZA_TYPE_ERROR = new Error('unknown pizza type');

export function isValidPizza(type) {
    return PIZZA_TYPES.indexOf(type) !== -1;
}
