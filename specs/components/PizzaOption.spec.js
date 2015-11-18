import React from 'react';

import { PizzaOption } from 'components/PizzaOption';
import { PIZZA_TYPES } from 'lib/pizza-types';

export default class ComponentSpec extends React.Component {

    onClick = type => {
        console.log('you clicked', type);
    }

    render() {

        var pizzaTypes = PIZZA_TYPES.map(type => (
            <div key={type} className='col-xs-6'>
                <PizzaOption
                    type={type}
                    onClick={this.onClick} />
            </div>
        ));

        var pizzaTypesActive = PIZZA_TYPES.map(type => (
            <div key={type} className='col-xs-6'>
                <PizzaOption
                    type={type}
                    currentValue={type}
                    onClick={this.onClick} />
            </div>
        ));

        return (
            <div className='container' style={{marginTop:20}}>
                <div className='row'>
                    {pizzaTypes}
                </div>
                <hr />
                <div className='row'>
                    {pizzaTypesActive}
                </div>
            </div>
        );
    }
}
