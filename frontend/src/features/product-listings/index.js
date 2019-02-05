import React, { Component } from 'react';
import ProductListItems from './product-list-item';
// import cartReducer from '../cart/reducer';
import { connect } from 'react-redux';


class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            name: ''
        }
        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.name !== prevProps.name) {
            this.setState({name:this.props.name});
            this.getProducts();
        }
    }

    updateInputValue(e){
        this.setState({
           products : e,
          });
    }
    getProducts = () => {
    if(this.props.user_id){
        const request = `http://localhost:8000/products/${this.props.user_id}`;
        fetch(request)
            .then(res => { return res.json() })
            .then((res) => this.updateInputValue(res))
            .catch((err) => {
                console.error(err);
            })
        } 
    else if(this.props.name){
        const request = `http://localhost:8000/products/search/${this.props.name}`;
        fetch(request)
            .then(res => { return res.json() })
            .then((res) => this.updateInputValue(res))
            .catch((err) => {
                console.error(err);
            })
    }    
    else {
            const request = 'http://localhost:8000/products';
        fetch(request)
            .then(res => { return res.json() })
            .then((res) => this.updateInputValue(res))
            .catch((err) => {
                console.error(err);
            })
        }
    }
    render() {
        
        const { products } = this.state;
        console.log(this.state);
        // this.updateInputValue(this.props.name)
        return (<div className='product-listing'>
                {products.map((product) => 
                    <ProductListItems
                        addToCart={this.props.addToCart}
                        product={product}
                         key={product.id} 
                         removeFromCart={this.props.removeFromCart}
                         cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}/>)

                }
            </div>)
    }
}

function mapStateToProps(state) {
    // console.log(state)
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