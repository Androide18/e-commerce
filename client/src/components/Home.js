import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carrusel from './Carrusel.jsx'
import "../index.css";
import { connect } from 'react-redux';
import { getCategories, getProducts } from '../actions';


function Home(props) {


    // const [infoProducts, setInfoProducts] = useState([])
    // const [search, setSearch] = useState('')

    // useEffect(() => {
    //     axios.get('http://localhost:3001/products')
    //         .then(res => {
    //             setInfoProducts(res.data)
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //         })
    // }, [])


    useEffect(() => {
        props.getProducts()
        props.getCategories()
    }, [])

  
    // const handleChange = async (e) => {
    //     e.persist();
    //     await setSearch({ search: e.target.value});
    //     console.log(search);
    //   }


    return (
        <div className='Home'>
            <br />
            <br />
            <div className="Carousel">
                <Carrusel />
            </div>
            <ul className="products">
                {
                    props.products.map(el => (

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

function mapStateToProps(state) {
    return {
        products: state.productsLoaded,
        categories: state.categoriesLoaded,
        loading: state.loading,
        error: state.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
        getCategories: () => dispatch(getCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
