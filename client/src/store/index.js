import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {getCategoriesReducer} from '../reducers/C-reducer';
import { getProductsReducer, deleteProductReducer }  from '../reducers/P-reducer';
import Cookie from "js-cookie";
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/cartReducers';


const cartItems = Cookie.getJSON('cartItems') ||  [];
const initialState = {
    cart: { cartItems },
};

const reducer = combineReducers({
    categories: getCategoriesReducer,
    deleteProduct: deleteProductReducer,
    product: getProductsReducer,
    cart: cartReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;



