import React, {Component} from 'react';

import {Button, Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import img from '../imagenes/ropa.jpg';

//Product trae la informacion completa de un producto.
export class Product extends Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://mlm-s2-p.mlstatic.com/ropa-americana-paca-mixta-premium-10-pzas-checala-17728-MLM20143841218_082014-F.jpg" />
  <Card.Body>
    <Card.Title>Ropa al por mayor</Card.Title>
    <Card.Text>
      Venta de ropa de la mejor calidad al mejor precio.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>$1500</ListGroupItem>
    <ListGroupItem>150 unidades</ListGroupItem>
    <ListGroupItem>Ropa usada</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Volver a Home</Card.Link>
    <Card.Link href="#">Registrarse y comprar</Card.Link>
  </Card.Body>
  <Button variant='danger'>Agregar al Carrito</Button>
</Card>
        
        )
    }
}
