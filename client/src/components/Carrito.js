import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { getProductsOfCart } from '../actions/addBasketAction';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from '@material-ui/core';

function Carrito(props) {


  const carritoReducer = useSelector((state) => state.carritoReducer.orden.products);
  console.log('estado de carritoReducer', carritoReducer);



  // const { product, loading, error } = search

  // console.log('que es product', product)


  // console.log('productsCart.orden.products', productsCart.orden.products)

  // const carritoItems = useSelector(state => state.cart.cartItems);
  // //const cartItems = [carritoItems]
  // console.log('items desde el carrito.js', carritoItems)


  const productId = props.match.params.id;
  //const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  useEffect(() => {
    // if (productId) {
    //   //dispatchEvent(addToCart(productId, qty));
    dispatch(getProductsOfCart())
    console.log('USE EFFECT')
    //  }
  }, []);


  const checkoutHandler = () => {
    props.history.push();
  }

  // console.log('carritoItems', carritoItems)

  // const getProductsOfCart = (id) => {
  //   dispatch(getProductsOfCart(id));
  //   console.log('id',id)
  // };
  console.log('Q HAY?', carritoReducer)




  return (
    <>
      <br />
      <br />
      <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3>
                Carrito
          </h3>
              <div>
                <h3>Precio</h3>
              </div>
            </li>
            {


              !carritoReducer ?
                <div>
                  El Carrito está vacio
          </div>
                :
                Object.keys(carritoReducer).map(item => (
                  <div key={[item]}>
                    {console.log('item', carritoReducer[item])}
                    {console.log('item.products', carritoReducer[item].products)}
                    {/* {console.log('productos', productos)} */}

                    {/* </li>)),
                  
                   productos.map(item => (
                    // <li key={[item]}> */}
                    {/* {console.log('item', carritoReducer[item])}
                      {console.log('item.products', carritoReducer[item].products[0])} */}


                    <li key={carritoReducer[item].products} >

                      <div className="cart-image">
                        <img src={`http://localhost:3001/static/${carritoReducer[item].products[0].image}`} alt="product" />
                      </div>

                      <div className="cart-name">
                        <div>
                          {/* <Link to={"/product/" + item.product}> */}
                          {carritoReducer[item].products[0].name}
                          {/* </Link> */}

                        </div>
                        {/* <div>
                      Cantidad:
                  <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                      <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                        Borrar
                    </button>
                    </div> */}

                        <div>
                          Cantidad:
                      <input type="number" value="1" aria-label="Search" className="form-control" style={{ width: "100px" }} />
                        </div>

                      </div>
                      <div className="cart-price">
                        ${carritoReducer[item].products[0].price}
                      </div>
                    </li>
                  </div>

                )
                )
            }
          </ul>

        </div>

        {/* <div className="cart-action">
        <h3>
          Subtotal ( {carritoItems.reduce((a, c) => a + c.qty, 0)} items)
        :
         $ {carritoItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <Link className='link' to="/checkout">
          <button onClick={checkoutHandler} className="button primary full-width" disabled={carritoItems.length === 0}>
            Revisar
      </button>
        </Link>

      </div>  */}

        <div className="cart-action" >
          <div style={{ padding: "10px" }}>
            <h3>
              Subtotal {}(items)
          </h3>
            <Link className='link' to="/checkout">
              <button onClick={checkoutHandler} className="button primary full-width">
                Revisar
      </button>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Carrito;