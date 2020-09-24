import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Reviews from './Review';


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
            {/* <ul classNameName="products">
                {
                    infoProd.map(el => (

                        <li key={el.id}>
                            <div classNameName="product">
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
            </ul> */}
    )
            {/* <!--Main layout--> */}
            <div className="mt-5 pt-4" >

            { infoProd.map(el => (
                        <div key={el.id}> 



                    <div className="container dark-grey-text mt-5">

                        {/* <!--Grid row--> */}
                        <div className="row wow fadeIn">

                            {/* <!--Grid column--> */}
                            <div className="col-md-6 mb-4">

                                <img src={`http://localhost:3001/static/${el.image}`} className="img-fluid" alt="" />
                              
                               
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-md-6 mb-4">

                                {/* <!--Content--> */}
                                <div className="p-4">

                                    <div className="mb-3">
                                        <a href="">
                                            <span className="badge purple mr-1">{el.category}</span>
                                        </a>
                                      
                                    </div>

                                    <p className="lead">
                                       <span>${el.price}</span>
                                    </p>

                                    <p className="lead font-weight-bold" > {el.name} </p>

                                    <p>{el.description}</p>
              <p className="lead">
              <span><b>Stock:</b> {el.stock}</span>
              </p>
                                    <form className="d-flex justify-content-left">
                                        {/* <!-- Default input --> */}
                                        <input type="number" value="1" aria-label="Search" className="form-control" style={{ width: "100px" }} />
                                        <button className="btn btn-primary btn-md my-0 p" type="submit">Add to cart
                <i className="fas fa-shopping-cart ml-1"></i>
                                        </button>

                                    </form>

                                </div>
                                {/* <!--Content--> */}

                            </div>
                            {/* <!--Grid column--> */}

                        </div>
                        {/* <!--Grid row--> */}



                        {/* <!--Grid row--> */}
                        <div className="row d-flex justify-content-center wow fadeIn">

                            <Reviews />

                        </div>
                        {/* <!--Grid row--> */}

                    </div>
|
                    </div>
            ))}
  </div>
                {/* <!--Main layout--> */}

















            </div>
    )
}

export default ProductScreen;


