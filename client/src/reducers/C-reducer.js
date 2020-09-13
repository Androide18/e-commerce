import {
    DELETE_CATEGORY_ERROR, 
    DELETE_CATEGORY_REQUEST, 
    DELETE_CATEGORY_SUCCESS, 
    GET_CATEGORIES_ERROR, 
    GET_CATEGORIES_REQUEST, 
    GET_CATEGORIES_SUCCESS} from '../constants-F/constanst'
const initialState = {
    categoriesLoaded: [],
    loading: false,
    error: "",
}

function getCategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES_REQUEST:
            return { loading: true, categoriesLoaded: [] };
        case GET_CATEGORIES_SUCCESS:
            return { loading: false, categoriesLoaded: action.payload };
        case GET_CATEGORIES_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function deleteCategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_CATEGORY_REQUEST:
            return { loading: true };
        case DELETE_CATEGORY_SUCCESS:
            return { loading: false };
        case DELETE_CATEGORY_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export {
    getCategoriesReducer,
    deleteCategoriesReducer
}