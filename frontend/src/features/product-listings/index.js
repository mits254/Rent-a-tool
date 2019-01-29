import React, { Component } from 'react';
import ProductListItems from './product-list-item';
// import cartReducer from '../cart/reducer';
import { connect } from 'react-redux';

class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }
    getProducts = () => {

        const request = 'http://localhost:8000/products';
        fetch(request)
            .then(res => { return res.json() })
            .then((res) => this.setState({ products: res }))
            .catch((err) => {
                console.error(err);
            })
    }
    render() {
        const { products } = this.state;
        console.log(products)
        return (
            <div className='product-listing'>
                {products.map((product) =>
                    <ProductListItems
                        addToCart={this.addToCart}
                        product={product}
                         key={product.id} />)

                }
            </div>)
    }
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)