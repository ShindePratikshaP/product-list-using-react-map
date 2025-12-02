import React from 'react';
import "./Home.css";
import {PRODUCT_DATA} from "./../../configs/product.js";
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { APP_NAME, APP_DESCRIPTION , PRIMARY_COLOR , SECONDARY_COLOR} from '../../configs/app.js';


function Home() {
  return (
    <div>
        <h1 className='heading' style={{color:PRIMARY_COLOR}}>{APP_NAME}</h1>
        <div>
          {APP_DESCRIPTION ? (<p className='app-des' style={{color:SECONDARY_COLOR}}>{APP_DESCRIPTION}</p>):null }
        </div>

        <div className='product-container'>
        {PRODUCT_DATA.map((product)=>{

          const {id,name,description,image} = product;
            return(
                <ProductCard
                id ={id}
                name = {name}
                description = {description}
                image = {image}
                key = {id}
                 />
            
            );
        })}
        </div>
    </div>
  )
}

export default Home