import Axios from "axios";
import Cookie from "js-cookie";
import {
    CART_ADD_ITEM_REQUEST,
    CART_ADD_ITEM_SUCCESS,
    CART_ADD_ITEM_ERROR
} from "../constants/cartConstants";

// const addToCart = (productId, qty) => async (dispatch, getState) => {
//     try {
//         const {data} = await Axios.get('http://localhost:3001/products' + productId);
//         dispatch({type: CART_ADD_ITEM, payload: {
//             product: data._id,
//             name: data.name,
//             image: data.image,
//             price: data.price,
//             countInStock: data.countInStock,
//             qty
//         }
//     })
//     const {cart:{cartItems}} = getState();
//     Cookie.set("cartItems", JSON.stringify(cartItems));
//     } catch (error) {

//     }
// }
// const removeFromCart = (productId) => (dispatch, getState) => {
//     dispatch({type: CART_REMOVE_ITEM, payload: productId});

//     const {cart:{cartItems}} = getState();
//     Cookie.set("cartItems", JSON.stringify(cartItems));
// }
                
const addToCart = (product, qty) => async (dispatch) => {
    try {
        dispatch({ type: CART_ADD_ITEM_REQUEST, payload: '' });
        dispatch({ type: CART_ADD_ITEM_SUCCESS, payload: product })
    } catch (error) {
        dispatch({ type: CART_ADD_ITEM_ERROR, payload: error.message })
    }
}



const removeFromCart = (productId) => (dispatch) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: productId });

    //const { cart: { cartItems } } = getState();
    //Cookie.set("cartItems", JSON.stringify(cartItems));
}





export { addToCart, removeFromCart }