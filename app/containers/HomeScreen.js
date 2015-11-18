
import React from 'react';
import { connect } from 'react-redux';

import { start as startClientService } from 'services/client-service';
import { start as startDahsboardService } from 'services/dashboard-service';

@connect(s => s)
export class HomeScreen extends React.Component {

    state = {
        ssid: null,
    }

    updateSsid = e => {
        var { dispatch } = this.props;
        var ssid = e.target.value;
        this.setState({ssid});
        if (ssid.length === 3) {
            dispatch(startClientService(ssid));
        }
    }

    startDashboard = e => {
        var { dispatch } = this.props;
        dispatch(startDahsboardService());
    }

    render() {
        var { ssid } = this.state;
        return (
            <div>
                <input
                    type='text'
                    value={ssid}
                    onChange={this.updateSsid} />
                <button onClick={this.startDashboard}>
                    Create Dashboard
                </button>
            </div>
        );
    }
}
