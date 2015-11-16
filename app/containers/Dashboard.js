
import React from 'react';
import { connect } from 'react-redux';

@connect(s => {
    return {
        ssid: s.app.ssid,
        normal: s.votes.normal,
        veggie: s.votes.veggie,
        vegan: s.votes.vegan,
        gfree: s.votes.gfree,
        nope: s.votes.nope,
    };
})
export class Dashboard extends React.Component {
    render() {
        var {
            ssid,
            normal,
            veggie,
            vegan,
            gfree,
            nope,
        } = this.props;

        var url = (
            <span>
                http://mypizza.com/#
                <b>{ssid}</b>
            </span>
        );

        return (
            <div>
                <h3>Orders:</h3>
                <ul>
                    <li>Normal: <b>{normal}</b></li>
                    <li>Veggie: <b>{veggie}</b></li>
                    <li>Vegan: <b>{vegan}</b></li>
                    <li>Glutin Free: <b>{gfree}</b></li>
                    <li>No Pizza: <b>{nope}</b></li>
                </ul>
                <p>
                    {url}
                </p>
            </div>
        );
    }
}
