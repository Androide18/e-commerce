import React,{Component} from 'react';

export class Products extends Component {
    render(){
        const {titulo, descripcion, precio, cantidad} = this.props
        return (
            <div>
                <div className="details">
                    <div className="title">Titulo {titulo}</div>
                    <div className="descripcion"> Descripcion{descripcion}</div>
                    <div className="precio">Precio{precio}</div>
                    <div className="cantidad">Cantidad{cantidad}</div>
                </div>
            </div>
        )
    }
}