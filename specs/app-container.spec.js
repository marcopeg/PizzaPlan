
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import { Provider } from 'react-redux';
import { makeStore } from 'utils/store';

import { App } from 'containers/App';

describe('App Container', function() {

    it('should render home screen', function() {
        var store = makeStore();
        var cmp = ReactTestUtils.renderIntoDocument((
            <Provider store={store}>
                <App />
            </Provider>
        ));
        var dom = ReactDOM.findDOMNode(cmp);

        expect(
            dom.innerHTML.indexOf('PizzaPlan')
        ).to.not.equal(-1);
    });

    it('should render dashboard', function() {
        var store = makeStore(null, {
            app: {
                mode: 'mode@dashboard',
                ssid: 123,
            },
        });
        var cmp = ReactTestUtils.renderIntoDocument((
            <Provider store={store}>
                <App />
            </Provider>
        ));
        var dom = ReactDOM.findDOMNode(cmp);

        expect(
            dom.innerHTML.indexOf('x-table-results')
        ).to.not.equal(-1);
    });

    it('should render client', function() {
        var store = makeStore(null, {
            app: {
                mode: 'mode@client',
                ssid: 123,
            },
        });
        var cmp = ReactTestUtils.renderIntoDocument((
            <Provider store={store}>
                <App />
            </Provider>
        ));
        var dom = ReactDOM.findDOMNode(cmp);

        expect(
            dom.innerHTML.indexOf('What pizza')
        ).to.not.equal(-1);
    });

});
