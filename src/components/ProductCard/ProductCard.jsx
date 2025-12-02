import React from 'react';
import "./ProductCard.css";
import { LIGHT_COLOR, PRIMARY_COLOR } from '../../configs/app';

function ProductCard({id,name,description,image}) {
  return (
    <div className="product-card" style={{borderColor:PRIMARY_COLOR , backgroundColor:LIGHT_COLOR}}>
                    <h1 className='product-id'>
                      {id}
                    </h1>
                    <p className='product-name'>
                       {name}
                    </p>
                    <p className='product-info'>
                       {description}
                    </p>
                    <img src={image} className='img'/>
    </div>
        
  );
}

export default ProductCard