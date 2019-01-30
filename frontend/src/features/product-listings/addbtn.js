import React, { Component } from 'react';


export default class AddButton extends Component {
    constructor(props) {
        super(props);
        this.getAddTo = this.getAddTo.bind(this);
    }
    getAddTo = () => {
        let num = this.props.product;
        this.props.addToCart(num);
    }

    render() {
        return (
            <button onClick={this.getAddTo}>Add to cart
            </button>
        )
    }
}