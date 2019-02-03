import React from 'react';
import AddBtn from './addbtn';
import RemoveBtn from './removebtn';

export default function ProductListItem(props) {
    return (
        <section className='product-list-item'>
            <div className="row">
                <div className="col-1-of-3">
                    <div className="card">
                        <div className="card__side card__side--front card__side--front-1">
                            <div className="card__pic">
                                <img src={props.product.image} alt={props.product.name}
                                    style={{ height: 150, width: 150, marginLeft: 2, marginRight: 5 }} />
                            </div>
                            <h4 className="card__heading">
                                <span className="card__h-span-1">{props.product.name}</span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>Avalaible location : {props.product.location}</li>
                                    <li>Description {props.product.decription}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__side2-content">
                                <h4 className="card__price">
                                    <p className="card__price-value">{props.product.price} pts</p>
                                </h4>
                                <a href="" className="btn btn--white">
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
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
