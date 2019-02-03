import React from 'react';
import ProductListing from '../features/product-listings';
//import Search from './search';
import Router from '../Router';


export default function Homepage(props) {
    //console.log(props);
    return <div>
        <div className='front'>
            <div className='front-container2'>
                <img src='frontimage.jpg' alt='frontpicture' />
                <img className='image1' src='Logoname.png' alt='logo' />
                <a className='location' href='/geolocation'><i className="fas fa-map-marker-alt" id='icon'> Austin, Texas</i></a>
            </div>
        </div>
        <div className='product-div'>
            <ProductListing />
        </div>

    </div>
}