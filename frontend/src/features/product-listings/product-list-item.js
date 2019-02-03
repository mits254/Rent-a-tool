import React from 'react';
import AddBtn from './addbtn';
import RemoveBtn from './removebtn';

export default function ProductListItem(props) {
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
