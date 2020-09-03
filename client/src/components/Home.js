import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carrusel from './Carrusel.jsx'
import "../index.css";


function Home() {

    const [infoProducts, setInfoProducts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(res => {
                setInfoProducts(res.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])

    const handleChange = async (e) => {
        e.persist();
        await setSearch({ search: e.target.value});
        console.log(search);
      }

    return (
        <div className='Home'>
            <br />
            <br />
            <div className="Carousel">
                <Carrusel />
            </div>
            <ul className="products">
                {
                    infoProducts.map(el => (

                        <li key={el.id}>
                            <div className="product">
                                <ProductCard
                                    name={el.name}
                                    brand={el.brand}
                                    price={el.price}
                                    stock={el.stock}
                                    description={el.description}
                                    category={el.category}
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

export default Home;
