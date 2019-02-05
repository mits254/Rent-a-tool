import React from 'react';
import { connect } from 'react-redux';

function sort(items) {
    return items.sort((a, b) => a.id < b.id)
}
function Cart(props) {
    console.log(props)
    if(props.cart.length !== 0){
    return (<div className="cart-page">
    <h1>Cart</h1>
    <table id="cart" className="table table-hover table-condensed">
      <thead>
        <tr className="product-list">
          <th style={{width:"40%"}}>Product</th>
          <th style={{width:"10%"}}>Price</th>
          <th style={{width:"8%"}}>Quantity</th>
          <th style={{width:"22%"}} className="text-center">Subtotal</th>
          <th style={{width:"10%"}}></th>
        </tr>
      </thead>
      <tbody>
      {sort(props.cart).map((item, i)=>
        <tr key = {i}>   
          <td data-th="Product" className='product-cart'>
            <div className="row">
              <div className="col-sm-2 hidden-xs"><img src={item.image} alt={item.name} className="img-responsive" /></div>
              <div className="col-sm-10">
                <h4 className="nomargin">{item.name}</h4>
                
              </div>
            </div>
          </td>
          <td data-th="Price">{item.price}</td>
          <td data-th="Quantity">
            <input type="number" className="form-control text-center" value={item.quantity}/>
          </td>
          <td data-th="Subtotal" className="text-center">{item.quantity * item.price}</td>
          <td className="actions" data-th="">
            <button className="btn btn-info btn-sm" onClick={() => props.addToCart(item)}><i className="fa fa-plus"></i></button>
            <button className="btn btn-danger btn-sm" onClick={() => props.removeFromCart(item)}><i className="fa fa-minus"></i></button>
            </td>
        </tr>
            )}
      </tbody>
      <tfoot>
        <tr className="visible-xs">
          <td className="text-center"><strong>Total 1.99</strong></td>
        </tr>
        <tr>
          <td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
          <td colSpan="2" className="hidden-xs"></td>
          <td className="hidden-xs text-center"><strong>Total $1.99</strong></td>
          <td><a href="#" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
        </tr>
      </tfoot>
    </table>
  </div>)
    } else {
        return <h1 className="cart-page"> YOUR CART IS EMPTY !!!</h1>
    }

         {/* <table classNameName='cart-page'> 
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sort(props.cart).map(item => <tr>
                            <td>{ item.name }</td>
                            <td>{ item.quantity }</td>
                            <td>
                                <button onClick={() => props.addToCart(item)}>+</button>
                                <button onClick={() => props.removeFromCart(item)}>-</button>
                            </td>
                            <td>
                                <button onClick={()=> props.removeAllFromCart(item)}>
                                    Remove all 
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
                </table> */ }

    
}
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_All', payload: item })
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)