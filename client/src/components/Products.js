import React from 'react';
import ProductCard from './ProductCard';




//Product trae la informacion completa de un producto.
function Products(props){
  return(
    <div>

        {props.products.map((product) => {
          return(
            <ProductCard 
              key = {product.id}
              name = {product.name}
              price = {product.price}
              description = {product.description}
              stock = {product.stock}
              category = {product.category}
              image = {product.image}

            />
          )
        })}
    </div>
  )
}
export default Products;
                
            