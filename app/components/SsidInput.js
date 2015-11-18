
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
        value: '',
    }

    onChange = e => {
        var value = e.target.value;
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
            <div className='container placed-center' style={{marginTop:'-20%'}}>
                <input
                    type='number'
                    pattern='\d*'
                    className='form-control'
                    placeholder='123'
                    value={value}
                    onChange={this.onChange} />
            </div>
        );
    }
}
