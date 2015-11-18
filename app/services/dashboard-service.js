
import { setMode, setSsid } from 'actions/app-actions';
import { set as setVote, reset as resetVote } from 'actions/dashboard-actions';
import { subscribe, createSessionId } from 'services/firebase-service';

export const MODE_DASHBOARD = 'mode@dashboard';

export function start() {
    return (dispatch, getState) => {
        dispatch(setMode(MODE_DASHBOARD));

        createSessionId().then(ssid => {
            dispatch(setSsid(ssid));
            subscribe(ssid, votes => {
                dispatch(update(ssid, votes));
            });
        });
    };
}

export function update(ssid, votes) {
    return (dispatch, getState) => {
        if (votes === null) {
            dispatch(resetVote());
        } else {
            Object.keys(votes).forEach(type => {
                dispatch(setVote(type, votes[type]));
            });
        }
    };
}
