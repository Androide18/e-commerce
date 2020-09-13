
import axios from 'axios';
import { DELETE_PRODUCT_ERROR, 
    DELETE_PRODUCT_REQUEST, 
    DELETE_PRODUCT_SUCCESS, 
    GET_CATEGORIES_ERROR, 
    GET_CATEGORIES_REQUEST, 
    GET_CATEGORIES_SUCCESS } from '../constants-F/constanst';


export const getCategories = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CATEGORIES_REQUEST, payload: '' });
        const { data } = await axios.get('http://localhost:3001/categories');
        dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data })
    } catch (error) {
        dispatch({type: GET_CATEGORIES_ERROR, payload: error.message})
    }
}

export const deleteCategory = (id) => async (dispatch) => {
    try {
        dispatch({type: DELETE_PRODUCT_REQUEST, payload: id});
        const { data } = await axios.delete('http://localhost:3001/products/' + id);
        dispatch({type: DELETE_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({type: DELETE_PRODUCT_ERROR, payload: error.message})
    }
}
