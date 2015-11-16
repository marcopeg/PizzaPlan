
export const SET_MODE = 'app@setMode';
export const SET_SSID = 'app@setSsid';

export function setMode(mode) {
    return {
        type: SET_MODE,
        payload: { mode },
    };
}

export function setSsid(ssid) {
    return {
        type: SET_SSID,
        payload: { ssid },
    };
}
