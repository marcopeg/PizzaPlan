
import Firebase from 'firebase';

var _ref;

export function start() {
    return () => {
        _ref = new Firebase('pizzaplan.firebaseio.com');
    };
}

export function up(ssid, type) {
    return () => {
        var path = getPath(ssid, type);
        _ref.child(path).transaction(curr => {
            if (curr) {
                return curr + 1;
            } else {
                return 1;
            }
        });
    };
}

export function down(ssid, type) {
    return () => {
        var path = getPath(ssid, type);
        _ref.child(path).transaction(curr => {
            if (curr > 0) {
                return curr - 1;
            } else {
                return 0;
            }
        });
    };
}

export function subscribe(ssid, callback) {
    _ref.child(ssid).on('value', snap => callback(snap.val()));
}

export function getPath(ssid, type) {
    return [ssid, type].join('/');
}

/**
 * @TODO: How to calculate an unique but simple sessionId?
 */

export function makeSsid() {
    var val = Math.floor(Math.random() * 1000 + 1);
    if (val < 100) {
        val = val * 10;
    }

    return val;
}

export function createSessionId() {
    return new Promise((resolve, reject) => {
        var attempts = 0;

        function test() {
            if (attempts > 10) {
                return reject();
            }

            var ssid = makeSsid();
            _ref.child(ssid).once('value', snap => {
                if (snap.val() === null) {
                    resolve(ssid);
                } else {
                    attempts++;
                    test();
                }
            });
        }

        test();
    });
}
