import axios from "axios";
import {
    CART_ADD_ITEM_ERROR, CART_ADD_ITEM_REQUEST, CART_ADD_ITEM_SUCCESS,
    GET_PRODUCTS_FROM_CART_ERROR, GET_PRODUCTS_FROM_CART_REQUEST, GET_PRODUCTS_FROM_CART_SUCCESS
} from "../constants-F/constanst";



const addToCart = (product, qty) => async (dispatch) => {
    try {
        var dataProduct = { productId: product.id, price: product.price, quantity: 1 }
        dispatch({ type: CART_ADD_ITEM_REQUEST, payload: '' });
        await axios.post('http://localhost:3001/users/1/cart', dataProduct);
        dispatch({ type: CART_ADD_ITEM_SUCCESS, payload: '' })
    } catch (error) {
        dispatch({ type: CART_ADD_ITEM_ERROR, payload: error.message })
    }
}

const updateCart = (product, qty) => async (dispatch) => {
    try {
        dispatch({ type: CART_ADD_ITEM_REQUEST, payload: '' });
        dispatch({ type: CART_ADD_ITEM_SUCCESS, payload: product })
    } catch (error) {
        dispatch({ type: CART_ADD_ITEM_ERROR, payload: error.message })
    }
}

const getProductFromCart = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_FROM_CART_REQUEST, payload: '' });
        const { data } = await axios.get('http://localhost:3001/users/1/cart');
        dispatch({ type: GET_PRODUCTS_FROM_CART_SUCCESS, payload: {products: data }})
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_FROM_CART_ERROR, payload: error.message })
    }
}



const removeFromCart = (productId) => async (dispatch) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: productId });

    //const { cart: { cartItems } } = getState();
    //Cookie.set("cartItems", JSON.stringify(cartItems));
}





export { addToCart, removeFromCart, getProductFromCart }