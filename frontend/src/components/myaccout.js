import React from 'react';
import { Link } from 'react-router-dom'
import Productlisting from '../features/product-listings'

export default function MyAccount() {
    const token = JSON.parse(sessionStorage.getItem('token'));
    console.log(token.username);
    return (<div className='myaccount'>
        <h2 className='name'> Hello, {token.username}</h2>
        <button className='btn-product'>
            <Link to={{ pathname:'/add', state :{user_id : `${token.id}`}}}> 
            <i className="fas fa-briefcase" id='icon'> Add Product</i>
            </Link>
        </button>
        
        <Productlisting user_id = {token.id}/>
        
    </div>)

}