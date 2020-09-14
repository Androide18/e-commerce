import { GET_NUMBERS_BASKET } from './types';

export const getNumbers = () => {
    return(dispatch) => {
        console.log('obteniendo todos los numeros del basket');
        dispatch({
            type: GET_NUMBERS_BASKET
        });
    }
}