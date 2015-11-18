
import React from 'react';
import { connect } from 'react-redux';

import { start as startAppService } from 'services/app-service';
import { MODE_CLIENT } from 'services/client-service';
import { MODE_DASHBOARD } from 'services/dashboard-service';

import { Dashboard } from 'containers/Dashboard';
import { Client } from 'containers/Client';
import { HomeScreen } from 'containers/HomeScreen';

@connect(s => s.app)
export class App extends React.Component {

    componentWillMount() {
        var { dispatch } = this.props;
        dispatch(startAppService());
    }

    render() {
        var { mode } = this.props;
        switch (mode) {
            case MODE_DASHBOARD:   return <Dashboard />;
            case MODE_CLIENT:      return <Client />;
            default:               return <HomeScreen />;
        }
    }
}
