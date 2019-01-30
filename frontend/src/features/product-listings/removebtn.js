import React, { Component } from 'react';


export default class RemoveButton extends Component {
    constructor(props) {
        super(props);
        this.removeCart = this.removeCart.bind(this);
    }

    removeCart = () => {
        let num = this.props.cartItem;
        this.props.removeFromCart(num);
    }
    render() {
        return (
            <button onClick={this.removeCart}>Remove</button>
        )
    }
}