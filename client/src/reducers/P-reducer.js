import {
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
} from "../constants-F/constanst";


const initialState = {
    productsLoaded: [],
    loading: false,
    error: "",
}

function getProductsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { loading: true, productsLoaded: [] };
        case GET_PRODUCTS_SUCCESS:
            return { loading: false, productsLoaded: action.payload };
        case GET_PRODUCTS_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function deleteProductReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return { loading: true };
        case DELETE_PRODUCT_SUCCESS:
            return { loading: false };
        case DELETE_PRODUCT_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export {
    getProductsReducer,
    deleteProductReducer
}