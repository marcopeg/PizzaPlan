
import React from 'react';
import { connect } from 'react-redux';

import { PizzaOption } from 'components/PizzaOption';
import { PIZZA_TYPES } from 'lib/pizza-types';
import { clickOption } from 'services/client-service';

@connect(s => {
    return {
        ssid: s.app.ssid,
        vote: s.client.vote,
    };
})
export class Client extends React.Component {
    onChooseOption = type => {
        var { dispatch } = this.props;
        var action = clickOption(type);
        dispatch(action);
    }

    render() {
        var { ssid, vote } = this.props;
        var options = PIZZA_TYPES.map(type => (
            <PizzaOption
                key={type}
                type={type}
                currentValue={vote}
                onClick={this.onChooseOption} />
        ));
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
