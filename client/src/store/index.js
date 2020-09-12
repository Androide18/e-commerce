import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import getCategoriesReducer from '../reducers/C-reducer';
import { getProductsReducer, deleteProductReducer }  from '../reducers/P-reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    categories: getCategoriesReducer,
    deleteProduct: deleteProductReducer,
    product: getProductsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
