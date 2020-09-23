import React from 'react';
import { useSelector } from 'react-redux';


const SearchResult = () => {
    const search = useSelector((state) => state.search);
    console.log('estado de search',search);
    return (
        <div>
            <h1 className='text-black'>Resultado: </h1>
            <div className='text-warning'>Buscando..</div>
            <div className='text-success'>
                <span>Producto</span>
            </div>
            <span className='text-danger'>Error</span>
        </div>
    )
}

export default SearchResult;