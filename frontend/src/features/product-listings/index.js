import React from 'react';
import ProductListItems from './product-list-item';

export default function ProductListing(props) {
    return <div>
        {
            props.products.map(product =>
                <ProductListItems product={product} />)
        }
    </div>
}