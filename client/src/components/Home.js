import { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCategories, getProducts } from '../actions/index';


import React from 'react';
import ProductCard from './ProductCard';
import Carrusel from './Carrusel.jsx'
import "../index.css";
import { useSelector } from 'react-redux';
import { listProducts, detailsProduct } from '../actions/productActions';



function Home({ categories, products, loading, error }) {

    //const [infoProducts, setInfoProducts] = useState([]);
    //const productList = useSelector(state => state.productList);
    //const {products, loading, error} = productList;
    //const dispatch = useDispatch();


    // useEffect(() => {
    //     getProducts()
    //     getCategories()
    // }, [])

    const products = useSelector(state => state.product)
    const { productsLoaded, loading, error } = products
    //const dispatch = useDispatch()

    return (
        <>
            <br />
            <br />
            {loading ? (<div>Loading...</div>) : error ? (<div>{error}</div>) : (
                <div className='Home'>
                    <br />
                    <br />
                    <div className="Carousel">
                        <Carrusel />
                    </div>
                    <ul className="products">
                        {productsLoaded.map(el => (
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
            )}

        </>
    );
}

export default Home;


// function mapStateToProps(state) {
//     return {
//         products: state.productsLoaded,
//         categories: state.categoriesLoaded,
//         loading: state.loading,
//         error: state.error,
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         getProducts: () => dispatch(getProducts()),
//         getCategories: () => dispatch(getCategories())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);