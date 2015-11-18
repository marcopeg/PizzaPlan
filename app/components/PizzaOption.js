
import React from 'react';

import { __noop } from 'lib/mish';
import { PIZZA_TYPES, getTypeLabel } from 'lib/pizza-types';

export class PizzaOption extends React.Component {

    static propTypes = {
        type: React.PropTypes.oneOf(PIZZA_TYPES),
    }

    static defaultProps = {
        type: null,
        style: 'success',
        currentValue: null,
        onClick: __noop,
    }

    onClick = e => {
        var { type, onClick } = this.props;
        onClick(type);
    }

    render() {
        var { type, style, currentValue, handler } = this.props;
        var isDisabled = (type === currentValue);
        var classes = ['btn', 'btn-block'];

        if (isDisabled) {
            classes.push('btn-' + style);
        } else {
            classes.push('btn-' + style + '-outline');
        }

        return (
            <button
                className={classes.join(' ')}
                style={{marginBottom:10}}
                children={getTypeLabel(type)}
                onClick={this.onClick} />
        );
    }
}
