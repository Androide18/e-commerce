import {
    GET_CATEGORIES
} from "../constants-F/constanst";

const initiaState = {
    categoriesLoaded: [],
    loading: false,
    error: "",
}

function getCategoriesReducer(state = initiaState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state, categoriesLoaded: state.categoriesLoaded.concat(action.payload) };
        default:
            return state;
    }
}


export default getCategoriesReducer;