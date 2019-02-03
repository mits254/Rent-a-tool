import React, { Component } from 'react';
//import ProductListItems from './product-list-item';
import cartReducer from '../cart/reducer';
//import { connect } from 'react-redux';


export default class ADDProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: '',
                description: '',
                location: '',
                type: '',
                price: '',
                image: '',
            }
        }
        this.getProducts = this.getProducts.bind(this);
    }

    // componentDidMount() {
    //     this.getProducts();
    // }
    getProducts = (e) => {
        e.preventDefault();
        const form = {
            name: this.state.product.name,
            description: this.state.product.description,
            location: this.state.product.location,
            type: this.state.product.type,
            price: this.state.product.price,
            image: this.state.product.image
        }
        console.log(form)
        const request = 'http://localhost:8000/products/add';
        fetch(request,{
            method : 'POST',
            headers : {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(form)
        }).then(res => { return res.json() })
            .then((res) => console.log(res))
            .catch((err) => {
                console.error(err);
            })
    }
    render() {
        const { product } = this.state;
        console.log(product)
        return (<div>
              <input type="text" id="first" placeholder="Product Name" value={this.state.name}
                        onChange={e => this.setState({ product: { ...product, product: e.target.value } })}  />

                    <input type="text" id="last" placeholder="Product Description" value={this.state.description}
                        onChange={e => this.setState({ product: { ...product, description: e.target.value } })}  />

                    <input type="text" id="address" placeholder="Product Location" value={this.state.location}
                    onChange={e => this.setState({ product: { ...product, address: e.target.value } })}/>

                    <input type="text" id="city" placeholder="Type" value={this.state.type}
                    onChange={e => this.setState({ product: { ...product, city: e.target.value } })}/>

                    <input type="text" id="State" placeholder="Price" value={this.state.price}
                    onChange={e => this.setState({ product: { ...product, state: e.target.value } })}/>

                    <input type="integer" id="phone" placeholder="Image Url" value={this.state.image}
                    onChange={e => this.setState({ product: { ...product, phone: e.target.value } })}/>

                    <button id="send" onClick={this.getProducts} method='POST'>Send</button>
                </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         cart: state.cart
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         addToCart: (item) => {
//             dispatch({ type: 'ADD', payload: item })
//         },
//         removeFromCart: (item) => {
//             dispatch({ type: 'REMOVE', payload: item })
//         }
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)