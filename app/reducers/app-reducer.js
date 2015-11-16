
import { SET_MODE, SET_SSID } from 'actions/app-actions';

export const initialState = {
    mode: null,
    ssid: null,
};

export function appReducer(state = initialState, action) {
    var { type, payload } = action;
    switch (type) {
        case SET_MODE:  return setMode(state, payload);
        case SET_SSID:  return setSsid(state, payload);
        default:        return state;
    }
}

export function setMode(state, payload) {
    return {
        ...state,
        mode: payload.mode,
    };
}

export function setSsid(state, payload) {
    return {
        ...state,
        ssid: payload.ssid,
    };
}
