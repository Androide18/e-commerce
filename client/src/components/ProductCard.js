import React, {Component} from 'react';
import './ProductCard.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class ProductCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
   handleClick = () => this.setState(console.log('estoy pasando por encima'));

    render(){
        return(
          <div className='containerCard' onClick={this.handleClick} > 
            <Card style={ { width: '18rem'} }>
                
            <Card.Img variant="top" src={this.props.image} alt='ropa01' />
            <Card.Body>
              <Card.Title>Articulo: {this.props.name}</Card.Title>
              <Card.Text>
                 Descripcion: {this.props.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>$ {this.props.price}</ListGroupItem>
              <ListGroupItem>Cant. {this.props.stock}</ListGroupItem>
              <ListGroupItem>Categoria: {this.props.category}</ListGroupItem>
            </ListGroup>
            
          </Card>
          </div>
        )
    }
}