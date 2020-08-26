import React,{Component} from 'react';
import data from '../data'

export class Products extends Component {
    render(){
        return (
        <ul>
            {
            data.products.map(product =>
            <li>
                <div>
                    <img src={product.image} alt='' width='80' height='80' />
                </div>
                <div>
                    {product.nombre}
                </div>
                <div>
                    {product.description}
                </div>
                <div>
                    {product.precio}
                </div>
                <div>
                    {product.stock}
                </div>
            </li>
            )
        }
        </ul>
        )
    }
