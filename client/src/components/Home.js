import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carrusel from './Carrusel.jsx'
import "../index.css";
import { connect } from 'react-redux';
import { traerInfoProducts } from '../store/action-creators/index';


function Home() {

    const [infoProducts, setInfoProducts] = useState([])
    // const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(res => {
                setInfoProducts(res.data)
                
console.log('MIRAR ESTO!!!');
console.log(res.data)
            })
            .catch(err => {
                console.log(err.message);
            })
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
        infoProducts: state.infoProducts
        
    }
}
// console.log(infoProducts);
function mapDispatchToProps(dispatch){
    return {
        traerInfoProducts: (id) => dispatch(traerInfoProducts(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);


