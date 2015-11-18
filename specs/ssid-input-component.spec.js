
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import { SsidInput } from 'components/SsidInput';

describe('SsisInput Component', function() {

    var spy;
    var cmp;
    var inp;

    beforeEach(function() {
        spy = sinon.spy();
        cmp = ReactTestUtils.renderIntoDocument(<SsidInput onValue={spy} />);
        inp = ReactDOM.findDOMNode(cmp).querySelector('input');
    });

    it('should NOT trigger for invalid session ids', function() {
        inp.value = '12';
        ReactTestUtils.Simulate.change(inp);
        expect(spy.withArgs('12').called).to.be.false;
    });

    it('should trigger when a valid session id is entered', function() {
        inp.value = '123';
        ReactTestUtils.Simulate.change(inp);
        expect(spy.withArgs('123').calledOnce).to.be.true;
    });

});
