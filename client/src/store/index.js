import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {getCategoriesReducer, saveCategoryReducer, updateCategoryReducer, deleteCategoryReducer} from '../reducers/C-reducer';
import { getProductsReducer, deleteProductReducer, saveProductReducer, updateProductReducer }  from '../reducers/P-reducer';
import Cookie from "js-cookie";
import thunk from 'redux-thunk';
import cartReducer  from '../reducers/cartReducers';
import basketReducer, { carritoReducer } from '../reducers/basketReducer'
import search from '../reducers/searchReducer';

// const cartItems = Cookie.getJSON('cartItems') ||  [];
// const initialState = {
//     cart: { cartItems },
// };

const reducer = combineReducers({
    categories: getCategoriesReducer,
    saveCategory: saveCategoryReducer,
    updateCategory: updateCategoryReducer,
    deleteCategory: deleteCategoryReducer,
    product: getProductsReducer,
    cart: cartReducer,
    basket: basketReducer,
    deleteProduct: deleteProductReducer,
    saveProduct: saveProductReducer,
    updateProduct: updateProductReducer,
    search: search,
    carritoReducer: carritoReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    //initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
