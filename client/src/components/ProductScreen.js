import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ProductScreen(props) {

    let matchId = parseInt(props.match.params.id); 

    const [infoProd, setInfoProd] = useState([])

    const prodFilt = infoProd.filter(el => el.id === matchId)
    
    const nombre = prodFilt.name

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(res => {
                setInfoProd(res.data)
            })
            .catch()
    }, [])

    
    

    return (
        
        <div>
            <ul className="products">
                {
                    prodFilt.map(el => (

                        <li key={el.id}>
                            <div className="product">
                                <ProductCard
                                    name={el.Name}
                                    price={el.Price}
                                    stock={el.Stock}
                                    description={el.Description}
                                    category={el.Category}
                                    id={el.id}
                                />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductScreen;


