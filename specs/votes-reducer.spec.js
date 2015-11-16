
import { votesReducer, addVote, removeVote } from 'reducers/votes-reducer';
import { ADD, REMOVE, add, remove } from 'actions/votes-actions';

describe.skip('votes-reducer', function() {
    it('should handle votes increase', function() {
        var state = votesReducer({normal:0}, add('normal'));
        expect(state.normal).to.equal(1);
    });

    it('should handle votes decrease', function() {
        var state = votesReducer({normal:2}, remove('normal'));
        expect(state.normal).to.equal(1);
    });

    it('should not go below Zero', function() {
        var state = votesReducer({normal:0}, remove('normal'));
        expect(state.normal).to.equal(0);
    });
});
