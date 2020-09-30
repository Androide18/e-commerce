import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, POST_PRODUCT_TO_CART, GET_PRODUCTS_OF_CART} from "../actions/types";



const initialState = {
    basketNumbers: 0,
    orden: [],
    // cartCost: 0,
    //  products: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            return {
                basketNumbers: state.basketNumbers + 1
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state;
    }
}



export const carritoReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_PRODUCT_TO_CART:
            return {
                ...state,
                orden: action.payload
            };
        case GET_PRODUCTS_OF_CART:
            return {
                ...state,
                orden: action.payload,
            };

        default:
            return state;
    }
}

