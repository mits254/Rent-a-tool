import React from 'react';
import ProductListing from '../features/product-listings';
import { Link } from 'react-router-dom';


export default function Homepage(props) {
    return (<div>
        <div className='front'>
            <div className='front-container2'>
                <img src='frontimage.jpg' alt='frontpicture' className='image1' />
                <img className='image2' src='Logoname.png' alt='logo' />
                <Link className='location' to='/geolocation'><i className="fas fa-map-marker-alt" id='icon'> Austin, Texas</i></Link>
            </div>
        </div>
        
        
            
                <ProductListing />
           
       
        
    </div>);
};