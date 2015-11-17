
import React from 'react';
import { connect } from 'react-redux';

import { PizzaOption } from 'components/PizzaOption';
import { PIZZA_TYPES } from 'lib/pizza-types';

@connect(s => {
    return {
        ssid: s.app.ssid,
        vote: s.client.vote,
    };
})
export class Client extends React.Component {

    render() {
        var { ssid, vote } = this.props;
        var options = PIZZA_TYPES.map(type => <PizzaOption key={type} type={type} currentValue={vote} />);
        return (
            <div>
                client {ssid}
                <div>
                    {options}
                </div>
            </div>
        );
    }
}
