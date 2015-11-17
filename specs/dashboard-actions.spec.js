
import { setVote } from 'actions/dashboard-actions';
import { PIZZA_TYPES, PIZZA_TYPE_ERROR } from 'lib/pizza-types';

describe('Dashboard Actions', function() {
    describe('known pizza types', function() {
        PIZZA_TYPES.forEach(function(type) {
            it('should accept ' + type, function() {
                var action = setVote(type, 1);
                expect(action.payload.type).to.equal(type);
            });
        });
    });

    describe('unknown pizza types', function() {
        it('should not accept invalid types', function() {
            expect(function() {
                setVote('foo', 1);
            }).to.throw(PIZZA_TYPE_ERROR);
        });
    });
});
