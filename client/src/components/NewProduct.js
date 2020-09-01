import React, {Component} from 'react';
import { Form, Button, Col} from 'react-bootstrap';
export default class NewProduct extends Component{
    render(){
        return(
            <div className="center">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese nuevo producto" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Categoria:</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese categoria" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Descripcion:</Form.Label>
                    <Form.Control placeholder="Breve descripcion del producto" />
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>URL de imagen:</Form.Label>
                    <Form.Control placeholder="Ingrese la URL de la imagen" />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Precio:</Form.Label>
                    <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Admin</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Verificado" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
        )
    }
}