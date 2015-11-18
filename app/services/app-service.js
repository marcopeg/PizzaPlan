
import { MODE_CLIENT, start as startClientService } from 'services/client-service';
import { MODE_DASHBOARD, start as startDahsboardService } from 'services/dashboard-service';
import { start as startFirebaseService } from 'services/firebase-service';

export function start() {
    return (dispatch, getState) => {
        var hash = getHash();
        dispatch(startFirebaseService());

        if (hash.toUpperCase() === 'DASHBOARD') {
            dispatch(startDahsboardService());
        } else if (hash.length) {
            dispatch(startClientService(hash));
        }
    };
}

export function getHash() {
    return window.location.hash.replace('#', '');
}
