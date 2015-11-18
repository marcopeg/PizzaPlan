
export const PIZZA_NORMAL = 'pizza@normal';
export const PIZZA_VEGGIE = 'pizza@veggie';
export const PIZZA_VEGAN = 'pizza@vegan';
export const PIZZA_GFREE = 'pizza@gfree';
export const PIZZA_NOPE = 'pizza@nope';

export const PIZZA_TYPES = [
    PIZZA_NORMAL,
    PIZZA_VEGAN,
    PIZZA_VEGGIE,
    PIZZA_GFREE,
    PIZZA_NOPE,
];

export const PIZZA_TYPE_ERROR = new Error('unknown pizza type');

export function isValidPizza(type) {
    return PIZZA_TYPES.indexOf(type) !== -1;
}

export function getTypeLabel(type) {
    switch (type) {
        case PIZZA_NORMAL:  return 'Normal';
        case PIZZA_VEGGIE:  return 'Vegetarian';
        case PIZZA_VEGAN:   return 'Vegan';
        case PIZZA_GFREE:   return 'Glutin Free';
        case PIZZA_NOPE:    return 'No Pizza';
    }
}
