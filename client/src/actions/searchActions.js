
import Axios from "axios";
import { GET_SEARCH } from "../constants/searchConstants";


export const getSearch = (query) => {
    return function (dispatch) {
      instance.get("search" + query).then((payload) => {
        dispatch({ type: GET_SEARCH, payload: payload.data });
      });
    };
  };