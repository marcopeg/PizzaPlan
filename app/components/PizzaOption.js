
import React from 'react';

import { __noop } from 'lib/mish';
import { PIZZA_TYPES } from 'lib/pizza-types';

export class PizzaOption extends React.Component {

    static propTypes = {
        type: React.PropTypes.oneOf(PIZZA_TYPES),
    }

    static defaultProps = {
        type: null,
        currentValue: null,
        onClick: __noop,
    }

    onClick = e => {
        var { type, onClick } = this.props;
        onClick(type);
    }

    render() {
        var { type, currentValue, handler } = this.props;
        var isActive = (type === currentValue);
        return (
            <p onClick={this.onClick}>{type} - {isActive.toString()}</p>
        );
    }
}
