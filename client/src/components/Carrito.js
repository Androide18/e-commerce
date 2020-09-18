import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from '@material-ui/core';

function Carrito(props) {

  const carritoItems = useSelector(state => state.cart.cartItems);
  //const cartItems = [carritoItems]
  console.log('items desde el carrito.js', carritoItems)


  const productId = props.match.params.id;
  //const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  useEffect(() => {
    if (productId) {
      //dispatchEvent(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push();
  }

  return (
    <>
    <br/>
    <br/>
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
            carritoItems.length === 0 ?
              <div>
                El Carrito está vacio
          </div>
              :
              carritoItems.map(item => (
                <li key={item.id}>
                  <div className="cart-image">
                    <img src={`http://localhost:3001/static/${item.image}`} alt="product" />
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
          Subtotal ( {carritoItems.reduce((a, c) => a + c.qty, 0)} items)
        :
         $ {carritoItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <Link className='link' to="/checkout">
          <button onClick={checkoutHandler} className="button primary full-width" disabled={carritoItems.length === 0}>
            Revisar
      </button>
        </Link>

      </div>

    </div>
    </>
  )
}

export default Carrito;