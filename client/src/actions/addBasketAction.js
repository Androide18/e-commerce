import Axios from 'axios';
import { ADD_PRODUCT_BASKET, POST_PRODUCT_TO_CART, GET_PRODUCTS_OF_CART } from './types'

export const addBasket = (productName) => {
  return (dispatch) => {
    console.log('añadido al basket')
    console.log('Producto: ', productName)
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: productName
    });
  }
}


// export const postProductToCart = ( productId ) => async (dispatch) => {
//     console.log('productId',productId)
//    try{
//       const data = await Axios.post("http://localhost:3001/users/1/cart")
//       console.log('data',data)
//         dispatch({ type: POST_PRODUCT_TO_CART,payload: {
//           productId: data.productId }
//       });
//     } catch (error) {

//     } 
// };


// ESTA FUNCIONA BIEN !!!

export const postProductToCart = (value) => async (dispatch) => {
  console.log('value', value)
  console.log('value.id', value.id)
  console.log('value.price', value.price)

  try {
   var data = {productId: value.id, price: value.price, quantity: 1}
   console.log('JSON DATA:', data)
   Axios.post('http://localhost:3001/users/11/cart', data).then(function(data){

    if (data.status === 200 ){
    dispatch({
      type: POST_PRODUCT_TO_CART, payload: {
        ProductId: value.id,
        price: value.price,
        quantity: 1,
        products: value
      }
    })
  }
      console.log('axios post data', data)

    });
    
  } catch (error) {
    return error;
  }
};

// ESTA NO DISPARA  :s

export const getProductsOfCart = () => async (dispatch) => {
  try {
    Axios.get("http://localhost:3001/users/1/cart").then(function(data){
      console.log('GET PRODUCTS AXIOS -> esto recibo del back', data.data)

      dispatch({
        type: GET_PRODUCTS_OF_CART, payload: {
          products: data.data
        }
      })
    })
    
  } catch (error) {
    return error;
  }
};