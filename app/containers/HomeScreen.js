
import React from 'react';
import { connect } from 'react-redux';

import { start as startClientService } from 'services/client-service';
import { start as startDahsboardService } from 'services/dashboard-service';

import { AppHeader } from 'components/AppHeader';
import { SsidInput } from 'components/SsidInput';

import pizzaIcon from 'assets/pizza.png';

@connect(s => s)
export class HomeScreen extends React.Component {

    startClient = ssid => {
        var { dispatch } = this.props;
        dispatch(startClientService(ssid));
    }

    startDashboard = e => {
        var { dispatch } = this.props;
        dispatch(startDahsboardService());
    }

    render() {
        return (
            <div className='text-center'>
                <AppHeader title='PizzaPlan' />
                <img src={pizzaIcon} width={180} />

                <SsidInput
                    onValue={this.startClient} />

                <button
                    className='btn btn-link x-placed-bottom'
                    style={{marginBottom:'5%'}}
                    onClick={this.startDashboard}
                    children='Create Group &raquo;' />
            </div>
        );
    }
}
