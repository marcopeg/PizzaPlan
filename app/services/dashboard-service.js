
import { setMode, setSsid } from 'actions/app-actions';
import { setVote, reset } from 'actions/dashboard-actions';
import { subscribe } from 'services/firebase-service';

export const MODE_DASHBOARD = 'mode@dashboard';

export function start() {
    return (dispatch, getState) => {
        var session = createSession();

        session.then(ssid => {
            dispatch(setSsid(ssid));
            dispatch(setMode(MODE_DASHBOARD));
        });

        session.then(ssid => {
            subscribe(ssid, votes => {
                dispatch(update(ssid, votes));
            });
        });
    };
}

export function update(ssid, votes) {
    return (dispatch, getState) => {
        if (votes === null) {
            dispatch(reset());
        } else {
            Object.keys(votes).forEach(type => {
                dispatch(setVote(type, votes[type]));
            });
        }
    };
}

/**
 * @TODO: How to calculate an unique but simple sessionId?
 */
export function createSession() {
    return new Promise((resolve, reject) => {
        resolve('123');
    });
}
