import React, { Component } from 'react';
import '../App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url = "http://localhost:3001/products/";

class CreateProductsScreen extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      id: '',
      name: '',
      price: '',
      stock: '',
      description: '',
      category: '',
      brand: '',
      tipoModal: ''
    }
  }

  peticionGet = () => {
    axios.get(url).then(res => {
      console.log(res);
      this.setState({ data: res.data });
    }).catch(err => {
      console.log(err.message);
    })
  }

  peticionPost = async () => {
    delete this.state.form.id;
    await axios.post(url, this.state.form).then(res => {
      this.modalInsertar();
      this.peticionGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  peticionPut = () => {
    axios.put(url + this.state.form.id, this.state.form).then(res => {
      this.modalInsertar();
      this.peticionGet();
      console.log(res);
    })
  }

  peticionDelete = () => {
    axios.delete(url + this.state.form.id).then(res => {
      this.setState({ modalEliminar: false });
      this.peticionGet();
      console.log(res);
    })
  }

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  }

  selecProduct = (prod) => {
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id:prod.id,
        name: prod.name,
        brand: prod.brand,
        price: prod.price,
        stock: prod.stock,
        description: prod.description,
        category: prod.category,
      }
    })
  }

  handleChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }

  componentDidMount() {
    this.peticionGet();
  }


  render() {
    const { form } = this.state;
    return (
      <div className="App">
        <br /><br /><br />
        <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar Producto</button>
        <br /><br />
        <table className="table ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Descripcion</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(prod => {
              return (
                <tr>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>{prod.brand}</td>
                  <td>${prod.price}</td>
                  <td>{prod.stock}u</td>
                  <td>{prod.description}</td>
                  <td>{prod.category}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => { this.selecProduct(prod); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
                    {"   "}
                    <button className="btn btn-danger" onClick={() => { this.selecProduct(prod); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader style={{ display: 'block' }}>
            <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form ? form.id : this.state.data.length + 1} />
              <br />
              <label htmlFor="name">Nombre</label>
              <input className="form-control" type="text" name="name" id="name" onChange={this.handleChange} value={form ? form.name : ''} />
              <br />
              <label htmlFor="brand">Marca</label>
              <input className="form-control" type="text" name="brand" id="brand" onChange={this.handleChange} value={form ? form.brand : ''} />
              <br />
              <label htmlFor="price">Precio</label>
              <input className="form-control" type="text" name="price" id="price" onChange={this.handleChange} value={form ? form.price : ''} />
              <br />
              <label htmlFor="stock">Stock</label>
              <input className="form-control" type="text" name="stock" id="stock" onChange={this.handleChange} value={form ? form.stock : ''} />
              <br />
              <label htmlFor="category">Categoria</label>
              <input className="form-control" type="text" name="category" id="category" onChange={this.handleChange} value={form ? form.category : ''} />
              <br />
              <label htmlFor="description">Descripcion</label>
              <input className="form-control" type="text" name="description" id="description" onChange={this.handleChange} value={form ? form.description : ''} />
              <br />
            </div>
          </ModalBody>

          <ModalFooter>
            {this.state.tipoModal == 'insertar' ?
              <button className="btn btn-success" onClick={() => this.peticionPost()}>
                Insertar
                  </button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
                Actualizar
                  </button>
            }
            <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
            Estás seguro que deseas eliminar el producto {form && form.name}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
            <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
          </ModalFooter>
        </Modal>
      </div>



    );
  }
}
export default CreateProductsScreen;