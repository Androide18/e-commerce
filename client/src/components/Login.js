import React, {Component} from 'react';
import { Form, Button, Col} from 'react-bootstrap';

export default class Login extends Component{
    render(){
        return(
            <div className="center">
            <Form>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Correo electronico/ Nombre de Usuario</Form.Label>
                    <Form.Control placeholder="Breve descripcion del producto" />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control placeholder="Breve descripcion del producto" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        )
    }
}