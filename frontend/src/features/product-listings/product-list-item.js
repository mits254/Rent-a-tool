import React from 'react';
import AddBtn from './addbtn';
import RemoveBtn from './removebtn';

export default function ProductListItem(props) {
    // constructor(props) {
    //     super(props);

    //     this.getAddTo = this.getAddTo.bind(this);
    //     this.removeCart = this.removeCart.bind(this);
    // }
    // getAddTo = () => {
    //     let num = this.props.product;
    //     this.props.addToCart(num.id);
    // }
    // removeCart = () => {
    //     let num = this.props.product;
    //     this.props.removeFromCart(num.id );
    // }
    // render() {
    //const thisItemInCart = this.props.cart.filter(item => item.id === this.props.product.id)[0]
    return (<div className='product-list-item'>
        <h1>{props.product.name}</h1>
        <img src={props.product.image} style={{ height: 200, width: 200, marginLeft: 2, marginRight: 5 }} alt={props.product.name}></img>
        <h3>Price : {props.product.price} pts </h3>
        <h3>Avalaible location : {props.product.location}</h3>
        <AddBtn cartItem={props.cartItem}
            product={props.product}
            addToCart={props.addToCart} />
            {
                props.cartItem 
                ? <RemoveBtn cartItem={props.cartItem}
                product={props.product}
                removeFromCart={props.removeFromCart} />
                : null
            }
        
    </div>)

    // }
}
