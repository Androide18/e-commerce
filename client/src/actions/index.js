import { 
    GET_PRODUCTS,
    GET_CATEGORIES,
    ADD_PRODUCT
} from "../constanst/constanst";
import axios from 'axios';


// ACCIONES PARA LOS PRODUCTOS 

export function getProducts() {
    return function(dispatch) {
        return axios.get('http://localhost:3001/products')
        .then( response => {
            dispatch({ type: GET_PRODUCTS, payload: response.data })
        })
    }
}


export function addProduct(form) {
    return function(dispatch) {
        return axios.post('http://localhost:3001/products', {form})
        .then(res => {
            dispatch({ type: ADD_PRODUCT, payload: form })
        })
    }
}


// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });



// function orderCreateReducer(state = {}, action) {
//     switch (action.type) {
//       case ORDER_CREATE_REQUEST:
//         return { loading: true };
//       case ORDER_CREATE_SUCCESS:
//         return { loading: false, order: action.payload, success: true };
//       case ORDER_CREATE_FAIL:
//         return { loading: false, error: action.payload };
//       default: return state;
//     }
//   }

// ACCIONES PARA CATEGORIAS 

export function getCategories() {
    return function(dispatch) {
        return axios.get('http://localhost:3001/categories')
        .then( response => {
            dispatch({ type: GET_CATEGORIES, payload: response.data })
        })
    }
}