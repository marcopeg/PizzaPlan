
import { setMode, setSsid } from 'actions/app-actions';
import { vote, reset } from 'actions/client-actions';
import { up, down, subscribe } from 'services/firebase-service';

export const MODE_CLIENT = 'mode@client';

var _ssid;

export function start(ssid) {
    return (dispatch, getState) => {
        _ssid = ssid;
        dispatch(setSsid(ssid));
        dispatch(setMode(MODE_CLIENT));

        subscribe(ssid, votes => {
            if (votes === null) {
                dispatch(reset());
            }
        });
    };
}

export function clickOption(type) {
    return (dispatch, getState)  => {
        var state = getState();

        if (type === state.client.vote) {
            return;
        }

        dispatch(vote(type));

        // propagate vote through firebase
        dispatch(up(_ssid, type));
        if (state.client.vote) {
            dispatch(down(_ssid, state.client.vote));
        }
    };
}
