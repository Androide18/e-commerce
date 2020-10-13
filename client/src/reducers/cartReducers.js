import { 
    GET_PRODUCTS_FROM_CART_ERROR, GET_PRODUCTS_FROM_CART_REQUEST, GET_PRODUCTS_FROM_CART_SUCCESS 
} from "../constants-F/constanst";

const initialState = {
    cartItems: [],
    loading: false,
    error: '',
    totalQuantity: '',
    totalPrice: ''
}

function getProductFromCartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_FROM_CART_REQUEST:
            return {...state, loading: true};
        case GET_PRODUCTS_FROM_CART_SUCCESS:
            return {
                ...state, loading: false, 
                cartItems: action.payload,
                totalPrice: action.payload.products[0].price ,
                totalQuantity: action.payload.products[0].quantity,
            };
        case GET_PRODUCTS_FROM_CART_ERROR:
            return { ...state, loading: false, error: action.payload}
        default:
            return state
    }
}

function updateCartReducer (state = initialState, action) {

}

function removeFromCartReducer (state = initialState, action) {
    
}


export { getProductFromCartReducer , updateCartReducer, removeFromCartReducer };