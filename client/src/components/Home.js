import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Carrusel from './Carrusel.jsx'
import "../index.css";


function Home() {

    const [infoProducts, setInfoProducts] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(res => {
                setInfoProducts(res.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [])


    return (
        <div className='Home'>
           <br/>
           <br/>
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

export default Home;

/*
import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Home() {

  const [infoProducts, setInfoProducts] = useState([])


  useEffect(() => {
      axios.get('http://localhost:3001/products')
          .then(res => {
              setInfoProducts(res.data)
          })
          .catch()
  }, [])

  return (
      <div>
          <ul className="products">
              {
                  infoProducts.map(el => (

                      <li key={el.id}>
                          <div className="product">
                              <ProductCard
                                  name={el.name}
                                  price={el.price}
                                  stock={el.stock}
                                  description={el.description}
                                  category={el.category}
                                  id={el.id}
                                  brand={el.brand}
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
*/
