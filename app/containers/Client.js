
import React from 'react';
import { connect } from 'react-redux';

import { PIZZA_TYPES } from 'lib/pizza-types';
import { clickOption } from 'services/client-service';

import { AppHeader } from 'components/AppHeader';
import { PizzaOptionsList } from 'components/PizzaOptionsList';

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
        var options = [...PIZZA_TYPES];

        return (
            <div className='container'>

                <AppHeader
                    title={ssid} />

                <p className='lead text-center' style={{fontSize:'2rem', marginBottom:30}}>
                    What pizza<br />do you want?
                </p>

                <PizzaOptionsList
                    options={options}
                    currentValue={vote}
                    onValue={this.onChooseOption} />
            </div>
        );
    }
}
