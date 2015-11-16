
export function parseDate(str) {
    var ts = Date.parse(str);

    if (isNaN(ts) === false) {
        return new Date(ts);
    }

    return null;
}

export function isFutureEvent(event) {
    var date = parseDate(event.date);

    if (date === null) {
        return false;
    }

    return date.getTime() >= Date.now();
}

export function parseEvent(event) {
    return {
        ...event,
        date: parseDate(event.date),
        isOpen: false
    };
}



/**
 * simulates the data fetching from the JSON API
 * -- to be implemented as soon there is a proper proxy server --
 */

import eventsFixture from 'fixtures/events.fixture.json';

export function fetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(eventsFixture.map(parseEvent));
        });
    });
}
