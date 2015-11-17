
import React from 'react';

import { dispatch } from 'utils/store';
import { clickOption } from 'services/client-service';
import { PIZZA_TYPES } from 'lib/pizza-types';

export class PizzaOption extends React.Component {

    static propTypes = {
        type: React.PropTypes.oneOf(PIZZA_TYPES),
    }

    static defaultProps = {
        type: 'normal',
        currentValue: null,
    }

    onClick = e => {
        var { type } = this.props;
        dispatch(clickOption(type));
    }

    render() {
        var { type, currentValue, handler } = this.props;
        var isActive = (type === currentValue);
        return (
            <p onClick={this.onClick}>{type} - {isActive.toString()}</p>
        );
    }
}
