import React from 'react';
import ProductListing from '../features/product-listings';
//import Search from './search';

export default function Homepage(props) {
    return <div>
        <div className='front'>
            <div className='front-container'>
                <img src='LogoMakr_9bRvck.png' alt='logo' />
                <h2> from your neighbor's garage !!</h2>
            </div>
            <div className='front-container2'>
                <img src='https://image.freepik.com/free-vector/vector-cartoon-mechanic-workshop-with-car-repairing-fixing-vehicle-garage-storeroom-with-fur_1441-2351.jpg' />
            </div>
        </div>
        <div>
            <ProductListing />
        </div>

    </div>
}