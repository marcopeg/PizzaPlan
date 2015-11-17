
import { votesReducer } from 'reducers/votes-reducer';
import { set, reset } from 'actions/dashboard-actions';
import { PIZZA_NORMAL } from 'lib/pizza-types';

describe('votes-reducer', function() {
    it('should set votes', function() {
        var state = votesReducer({[PIZZA_NORMAL]:0}, set(PIZZA_NORMAL, 1));
        expect(state[PIZZA_NORMAL]).to.equal(1);
    });

    it('should reset votes', function() {
        var state = votesReducer({[PIZZA_NORMAL]:1}, reset());
        expect(state[PIZZA_NORMAL]).to.equal(0);
    });
});
