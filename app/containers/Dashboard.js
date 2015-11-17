
import React from 'react';
import { connect } from 'react-redux';

@connect(s => {
    return {
        ssid: s.app.ssid,
        votes: s.votes,
    };
})
export class Dashboard extends React.Component {
    render() {
        var { ssid, votes } = this.props;

        var url = (
            <span>
                http://mypizza.com/#
                <b>{ssid}</b>
            </span>
        );

        votes = Object.keys(votes).map(vote => (
            <li key={vote}>{vote}: <b>{votes[vote]}</b></li>
        ));

        return (
            <div>
                <h3>Orders:</h3>
                <ul>{votes}</ul>
                <p>
                    {url}
                </p>
            </div>
        );
    }
}
