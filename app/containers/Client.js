
import React from 'react';
import { connect } from 'react-redux';

import { PizzaOption } from 'components/PizzaOption';

@connect(s => {
    return {
        ssid: s.app.ssid,
        vote: s.client.vote,
    };
})
export class Client extends React.Component {

    render() {
        var { ssid, vote } = this.props;
        return (
            <div>
                client {ssid}
                <div>
                    <PizzaOption type='normal' currentValue={vote} />
                    <PizzaOption type='veggie' currentValue={vote} />
                    <PizzaOption type='gfree' currentValue={vote} />
                    <PizzaOption type='nope' currentValue={vote} />
                </div>
            </div>
        );
    }
}
