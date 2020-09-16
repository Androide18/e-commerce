import { 
    CART_ADD_ITEM_REQUEST, 
    CART_ADD_ITEM_SUCCESS,
    CART_ADD_ITEM_ERROR,
} from "../constants/cartConstants";

// function cartReducer(state = { cartItems: [] }, action) {
//     switch (action.type) {
//         case CART_ADD_ITEM:
//             const item = action.payload;
//             const product = state.cartItems.find(x => x.product === item.product);
//             if (product) {
//                 return {
//                     cartItems:
//                         state.cartItems.map(x => x.product === product.product ? item : x)
//                 };
//             }
//             return { cartItems: [...state.cartItems, item] };
//         case CART_REMOVE_ITEM:
//             return { cartItems: state.cartItems.filter(x => x.product !== action.payload) };
//         default:
//             return state
//     }
// }


const initialState = {
    cartItems: [],
    loading: false,
    error: '',
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case CART_ADD_ITEM_REQUEST:
            return { ...state, loading: true};
        case CART_ADD_ITEM_SUCCESS:
            console.log(state);
            return { ...state, loading: false, cartItems: [...state.cartItems, action.payload]  };
        case CART_ADD_ITEM_ERROR:
            return { ...state, loading: false, error: action.payload}
        default:
            return state
    }
}


export { cartReducer } 