const initialState = {
    infoProducts: []
  };


  function mainReducer(state = initialState, action) {
    if (action.type === "TRAER_INFO_PRODUCT") {
        return {
          ...state,  // hago una copia del estado, porque sino piso el producto anterior.
          infoProducts: state.infoProducts.concat(action.payload)
        }
    }
    return state;
  }
  
  export default mainReducer;