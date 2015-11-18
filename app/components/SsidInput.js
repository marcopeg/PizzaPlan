
import React from 'react';

import { __noop } from 'lib/mish';

export class SsidInput extends React.Component {

    static propTypes = {
        length: React.PropTypes.number,
        onValue: React.PropTypes.func,
    }

    static defaultProps = {
        length: 3,
    }

    state = {
        value: '123',
    }

    onChange = e => {
        var value = e.target.value;
        this.setState({value});
    }

    onFocus = e => {
        var value = '';
        this.setState({value});
    }

    componentDidUpdate() {
        var { length, onValue } = this.props;
        var { value } = this.state;
        if (value.length >= length) {
            onValue(value);
        }
    }

    render() {
        var { value } = this.state;
        return (
            <div className='container x-placed-bottom' style={{marginBottom:'20%'}}>
                <input
                    type='number'
                    pattern='\d*'
                    className='form-control'
                    value={value}
                    onChange={this.onChange}
                    onFocus={this.onFocus} />
            </div>
        );
    }
}
