
export const SET_VOTE = 'dashboard@setVote';
export const RESET = 'dashboard@reset';

export function setVote(type, value) {
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
