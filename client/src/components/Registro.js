import React, {Component} from 'react';
import { Form, Button, Col} from 'react-bootstrap';

export default class Registro extends Component{
    render(){
        return(
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese nuevo producto" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese categoria" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control placeholder="Breve descripcion del producto" />
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Telefono:</Form.Label>
                    <Form.Control placeholder="Ingrese la URL de la imagen" />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Numero</Form.Label>
                    <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Casa/Dpto</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}