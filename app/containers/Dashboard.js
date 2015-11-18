
import React from 'react';
import { connect } from 'react-redux';

import { AppHeader } from 'components/AppHeader';
import { ResultsTable } from 'components/ResultsTable';

@connect(s => {
    return {
        ssid: s.app.ssid,
        votes: s.votes,
    };
})
export class Dashboard extends React.Component {
    render() {
        var { ssid, votes } = this.props;
        return (
            <div className='container'>
                <AppHeader title={ssid} />
                <ResultsTable results={votes} />
            </div>
        );
    }
}
