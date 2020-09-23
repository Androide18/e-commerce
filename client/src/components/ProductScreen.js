import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ProductScreen(props) {

    let matchId = parseInt(props.match.params.id); 

    const [infoProd, setInfoProd] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/products/' + matchId)
            .then(res => {
                console.log(res.data)
                setInfoProd([res.data])
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    
    

    return (
        
        <div>
            <ul className="products">
                {
                    infoProd.map(el => (

                        <li key={el.id}>
                            <div className="product">
                                <ProductCard
                                    name={el.name}
                                    price={el.price}
                                    stock={el.stock}
                                    description={el.description}
                                    category={el.category}
                                    id={el.id}
                                    image={el.image}
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


