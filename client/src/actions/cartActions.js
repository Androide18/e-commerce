import axios from "axios";
import {
    CART_ADD_ITEM_ERROR, CART_ADD_ITEM_REQUEST, CART_ADD_ITEM_SUCCESS,
    GET_PRODUCTS_FROM_CART_ERROR, GET_PRODUCTS_FROM_CART_REQUEST, GET_PRODUCTS_FROM_CART_SUCCESS,
    CART_SUBSTRACT_ITEM_REQUEST, CART_SUBSTRACT_ITEM_SUCCESS, CART_SUBSTRACT_ITEM_ERROR, CART_DELETE_ITEM_REQUEST, CART_DELETE_ITEM_SUCCESS, CART_DELETE_ITEM_ERROR
} from "../constants-F/constanst";



const addToCart = (product, qty) => async (dispatch) => {
    try {
        var dataProduct = { productId: product.id, price: product.price, quantity: 1 }
        dispatch({ type: CART_ADD_ITEM_REQUEST, payload: '' });
        const { data } = await axios.post('http://localhost:3001/users/1/cart', dataProduct);
        dispatch({ type: CART_ADD_ITEM_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: CART_ADD_ITEM_ERROR, payload: error.message })
    }
}

const substractFromCart = (productId, orderline) => async (dispatch) => {
    const { quantity, cartorderId } = orderline
    const data = { productId, quantity, cartorderId }
    console.log('productId', productId);
    console.log('data', data);
    try {
        dispatch({ type: CART_SUBSTRACT_ITEM_REQUEST, payload: '' });
        await axios.put('http://localhost:3001/users/1/cart', data)
        dispatch({ type: CART_SUBSTRACT_ITEM_SUCCESS, payload: '' })
    } catch (error) {
        dispatch({ type: CART_SUBSTRACT_ITEM_ERROR, payload: error.message })
    }
}

const getProductFromCart = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_FROM_CART_REQUEST, payload: '' });
        const { data } = await axios.get('http://localhost:3001/users/1/cart');
        dispatch({ type: GET_PRODUCTS_FROM_CART_SUCCESS, payload: { products: data } })
    } catch (error) {
        dispatch({ type: GET_PRODUCTS_FROM_CART_ERROR, payload: error.message })
    }
}

const removeFromCart = (orderline) => async (dispatch) => {
    const { productId } = orderline;
    var data = JSON.stringify({ "productId": productId });

    var config = {
        method: 'delete',
        url: 'http://localhost:3001/users/1/cart',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'connect.sid=s%3Avpwimh8YX9vAHDtbI4J5YNGBqyfO1nRX.ksLlhM5YChlXRi8%2FtS%2FPhQVFLxTLr0EbHXkbVSOCUBo'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}




// export const deleteProduct = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: DELETE_PRODUCT_REQUEST, payload: id });
//         const { data } = await axios.delete('http://localhost:3001/products/' + id);
//         dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: DELETE_PRODUCT_ERROR, payload: error.message })
//     }
// }



export { addToCart, substractFromCart, getProductFromCart, removeFromCart }