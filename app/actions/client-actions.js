
export const VOTE = 'client@vote';
export const RESET = 'client@reset';

export function vote(vote) {
    return {
        type: VOTE,
        payload: { vote },
    };
}

export function reset() {
    return {
        type: RESET,
        payload: {},
    };
}
