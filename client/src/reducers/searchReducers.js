import * as constants from "./constants";


var initialState = {
    products: [],
    productByID: {},
    filterProducts: [],
  };

  
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {


case constants.GET_SEARCH:
    return {
      ...state,
      filterProducts: action.payload,
    };

}