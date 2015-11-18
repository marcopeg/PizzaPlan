
import React from 'react';

import { PIZZA_TYPES } from 'lib/pizza-types';
import { __noop } from 'lib/mish';
import { PizzaOption } from 'components/PizzaOption';

export class PizzaOptionsList extends React.Component {

    static propTypes = {
        options: React.PropTypes.array,
        currentValue: React.PropTypes.oneOf(PIZZA_TYPES),
        onValue: React.PropTypes.func,
    }

    static defaultProps = {
        options: [],
        currentValue: null,
        onValue: __noop,
    }

    render() {
        var { options, currentValue, onValue } = this.props;
        var noPizza = options.pop();

        var options = options.map(type => (
            <div className='col-xs-6' key={type}>
                <PizzaOption
                    type={type}
                    currentValue={currentValue}
                    onClick={onValue} />
            </div>
        ));

        noPizza = (
            <div className='col-xs-12'>
                <PizzaOption
                    type={noPizza}
                    style='danger'
                    currentValue={currentValue}
                    onClick={onValue} />
            </div>
        );

        return (
            <div>
                <div className='row'>
                    {options}
                </div>
                <div className='row'>
                    {noPizza}
                </div>
            </div>
        );
    }
}
