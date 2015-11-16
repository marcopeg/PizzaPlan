
import { MODE_CLIENT, start as startClientService } from 'services/client-service';
import { MODE_DASHBOARD, start as startDahsboardService } from 'services/dashboard-service';
import { start as startFirebaseService } from 'services/firebase-service';

export function start() {
    return (dispatch, getState) => {
        var ssid = getSsid();
        dispatch(startFirebaseService());
        if (ssid) {
            dispatch(startClientService(ssid));
        } else {
            dispatch(startDahsboardService());
        }
    };
}

export function getSsid() {
    return window.location.hash.replace('#', '');
}
