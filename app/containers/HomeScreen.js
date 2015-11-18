
import React from 'react';
import { connect } from 'react-redux';

import { start as startClientService } from 'services/client-service';
import { start as startDahsboardService } from 'services/dashboard-service';

import { SsidInput } from 'components/SsidInput';

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
            <div>
                <SsidInput onValue={this.startClient} />
                <button
                    className='btn btn-link placed-bottom'
                    style={{marginBottom:'5%'}}
                    onClick={this.startDashboard}
                    children='Create Group &raquo;' />
            </div>
        );
    }
}
