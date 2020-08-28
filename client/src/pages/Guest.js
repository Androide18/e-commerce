import React, {Component} from 'react';
import Products from '../components/Products';
export default class Guest extends Component{
    constructor(props){
        super(props)
        this.state = {
           data: [
                {
                    "id": 1,
                    "name": "Polo",
                    "price": 500,
                    "description": "buena calidad",
                    "stock": "disponible",
                    "category": "Remeras",
                    "image": "https://c0.wallpaperflare.com/preview/996/822/428/adult-bracelet-casual-facial-expression.jpg"
                },
                {
                    "id": 2,
                    "name": "Pantalon de Jeans",
                    "price": 2500,
                    "description": "extrema calidad",
                    "stock": "pocos disponibles",
                    "category": "Pantalon",
                    "image": "https://c4.wallpaperflare.com/wallpaper/528/257/176/paul-egas-scarino-men-500px-jeans-wallpaper-preview.jpg"
                },
                {
                    "id": 3,
                    "name": "Vestido de mujer",
                    "price": 8000,
                    "description": "buena marca",
                    "stock": "muchos disponibles",
                    "category": "Vestido",
                    "image": "https://c4.wallpaperflare.com/wallpaper/7/290/409/a-woman-in-a-light-pink-dress-pink-clouds-wallpaper-preview.jpg"
                },
                {
                    "id": 4,
                    "name": "Zapatilla de dama",
                    "price": 65000,
                    "description": "las mejores",
                    "stock": "solo par",
                    "category": "Zapatillas",
                    "image": "https://dexter.vteximg.com.br/arquivos/ids/482066-540-540/AQ2731100_1.jpg?v=637008896201470000"
                }
            ]
        }
    }
        render(){
            return(
                <Products
                products = {this.state.data}
                />
        )
     }
}