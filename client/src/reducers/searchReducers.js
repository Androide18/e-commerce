import * as constants from "../constants/searchConstants";


var initialState = {
    filterProducts: [],
  };

  
export const searchReducer = (state = initialState, action) => {
    switch (action.type) {


case constants.GET_SEARCH:
    return {
      ...state,
      filterProducts: action.payload,
    };

}

}