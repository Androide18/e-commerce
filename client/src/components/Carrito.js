import React, { useEffect, useState } from 'react';
import { addToCart, getProductFromCart, removeFromCart } from '../actions/CartActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from '@material-ui/core';
import { getProductsOfCart } from '../actions/addBasketAction';

function Carrito(props) {


  const carritoReducer = useSelector((state) => state.carritoReducer.orden.products);

  const carrito = useSelector((state) => state.carritoReducer.orden.products);


  //const carritoReducer2 = useSelector((state) => state.cart.cartItems.products);
 

  const productId = props.match.params.id;
  //const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  useEffect(() => {
    dispatch(getProductFromCart())
    dispatch(getProductsOfCart())
  }, []);


  const checkoutHandler = () => {
    props.history.push();
  }

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
            { !carritoReducer ? <div> El Carrito está vacio </div> :
                carritoReducer[0].products.map(item => (
                  <div key={item.id}>
                    <li> {console.log("cantidad:", carritoReducer[0].quantity)}
                      <div className="cart-image">
                        <img src={`http://localhost:3001/static/${item.image}`} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          {/* <Link to={"/product/" + item.product}> */}
                          {item.name}
                          {/* </Link> */}
                        </div>
                        <br/>
                        <div>
                          Cantidad: {item.orderline.quantity}
                        </div>
                        <br/>
                        <button><i class="fas fa-plus-circle"></i></button> {"  "}
                        <button><i class="fas fa-minus-circle"></i></button> {"  "}
                        <button><i class="far fa-trash-alt"></i></button>
                      </div>
                      <div className="cart-price">
                        ${item.price}
                      </div>
                    </li>
                  </div>
                )
                )
            }
          </ul>
        </div>
        <div className="cart-action" >
          <div style={{ padding: "10px" }}>
            <h3>
              Total: {}(items)
              <div>{carrito[0].quantity}</div>
            </h3>
            <h3>
              Precio: {34}
            </h3>
            <Link className='link' to="/checkout">
              <button onClick={checkoutHandler} className="button primary full-width">
                Comprar
      </button>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Carrito;