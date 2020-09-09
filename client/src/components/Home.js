import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carrusel from './Carrusel.jsx'
import "../index.css";
import { useSelector, useDispatch } from 'react-redux';
import { listProducts, detailsProduct } from '../actions/productActions';

function Home() {
    //const [infoProducts, setInfoProducts] = useState([]);
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();
    // const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(listProducts());

        return ()=> {

        };
        // axios.get('http://localhost:3001/products')
        //     .then(res => {
        //         setInfoProducts(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err.message);
        //     })
    }, [])
    
    // const handleChange = async (e) => {
    //     e.persist();
    //     await setSearch({ search: e.target.value});
    //     console.log(search);
    //   }

    return loading ? <div>Cargando...</div> :
    error? <div>Error</div>:
    (
        <div className='Home'>
            <br />
            <br />
            <div className="Carousel">
                <Carrusel />
            </div>
            <ul className="products">
                {
                    products.map(el => (

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

export default Home;
