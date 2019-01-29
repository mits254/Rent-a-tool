import React, { Component } from 'react';

export default class ProductListItem extends  Component {
    constructor(props) {
        super(props);
        
        this.getAddTo = this.getAddTo.bind(this);
    }
    getAddTo=() =>{
        let num = this.props.product;
        this.props.addToCart(num.id);
    }
    render() {
        return (<div className='product-list-item'>
                    <h1>{this.props.product.name}</h1>
                    <img src={this.props.product.image} style={{ height: 200, width: 200, marginLeft: 2, marginRight: 5 }} alt={this.props.product.name}></img>
                    <h3>Price : {this.props.product.price} pts </h3>
                    <h3>Avalaible location : {this.props.product.location}</h3>

                    <div>
                        <button onClick={this.getAddTo}>Add to cart</button>
                    </div>

                    {/* <img height={100} title={this.props.name} src={``}/> */}
                
            </div>)
        
    }
}
