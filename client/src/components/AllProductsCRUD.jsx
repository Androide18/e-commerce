import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export class AllProductsCRUD extends Component {
    render() {
        return (
            <div>
                <div className='right'>
                    <Button variant="success">Create New Product</Button>
                </div>
                <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>PRICE</th>
                            <th>STOCK</th>
                            <th>CATEGORY</th>
                            <th>IMAGE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Pantalon Adidas</td>
                            <td>deportivo</td>
                            <td>1200</td>
                            <td>3000</td>
                            <td>pantalones</td>
                            <td>example.jpg</td>
                            <td><Button variant="warning">Edit</Button><Button variant="danger">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Camisa Hawaiana</td>
                            <td>estampas floreadas</td>
                            <td>900</td>
                            <td>2000</td>
                            <td>camisas</td>
                            <td>example1.jpg</td>
                            <td><Button variant="warning">Edit</Button><Button variant="danger">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Lentes de Sol</td>
                            <td>tornasolados UV</td>
                            <td>3500</td>
                            <td>500</td>
                            <td>Accesorios</td>
                            <td>example2.jpg</td>
                            <td><Button variant="warning">Edit</Button><Button variant="danger">Delete</Button></td>
                        </tr>
                    </tbody>
                </Table>
                </div>
            </div>
        )
    }
}
