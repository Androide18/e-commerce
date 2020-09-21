import { ADD_PRODUCT_BASKET } from './types'

export const addBasket = (productName) => {
    return (dispatch) =>{
        console.log('añadido al basket')
        console.log('Producto: ', productName)
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productName
        });
    }
}