import {
    GET_PRODUCTS_ERROR, 
    GET_PRODUCTS_REQUEST, 
    DELETE_PRODUCT_REQUEST, 
    DELETE_PRODUCT_SUCCESS, 
    DELETE_PRODUCT_ERROR, 
    GET_PRODUCTS_SUCCESS
} from "../constants-F/constanst";
import axios from 'axios';


export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_REQUEST, payload: '' });
        const { data } = await axios.get('http://localhost:3001/products');
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({type: GET_PRODUCTS_ERROR, payload: error.message})
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({type: DELETE_PRODUCT_REQUEST, payload: id});
        const { data } = await axios.delete('http://localhost:3001/products/' + id);
        dispatch({type: DELETE_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({type: DELETE_PRODUCT_ERROR, payload: error.message})
    }
}
