import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from '@material-ui/core';

function Carrito(props) {
  
  const cart = useSelector(state => {
    console.log(state);
    
    return state.cart;

  });
  const { cartItems } = cart;


  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  useEffect(() => {
    if (productId) {
      dispatchEvent(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push();
  }

  return (
  <div className="cart">
    <div className="cart-list">
      <ul className="cart-list-container">
        <li>
          <h3>
            Carrito
          </h3>
          <div>
            Precio
          </div>
        </li>
        {
          cartItems.length === 0 ?
            <div>
              El Carrito está vacio
          </div>
            :
            cartItems.map(item => (
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product}>
                      {item.name}
                    </Link>

                  </div>
                  <div>
                    Cantidad:
                  <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                      Borrar
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  ${item.price}
                </div>
              </li>
            )
            )
        }
      </ul>

    </div>
    <div className="cart-action">
      <h3>
        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
        :
         $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
      <Link className='link' to="/checkout">
      <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
        Revisar
      </button>
      </Link>

    </div>

  </div>
  )
}

export default Carrito;