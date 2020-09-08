import {
    GET_PRODUCTS,
    GET_CATEGORIES,
} from "../constanst/constanst";



const initiaState = {
    productsLoaded: [],
    categoriesLoaded: [],
    loading: false,
    error: "",
}


function rootReducer(state = initiaState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, productsLoaded: action.payload };
        case GET_CATEGORIES:
            return { ...state, categoriesLoaded: action.payload };
        default:
            return state;
    }
}

export default rootReducer;