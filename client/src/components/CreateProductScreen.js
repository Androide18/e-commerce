import React, { Component } from 'react';
import '../App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from 'reactstrap';

const url = "http://localhost:3001/products/";
const urlCat = "http://localhost:3001/categories/";

class CreateProductsScreen extends Component {
  state = {
    data: [],
    dataCat: [],
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
      image: '',
      tipoModal: ''
    }
  }

  componentDidMount() {
    this.peticionGet();
    this.peticionGetCat();
  }

  // peticionPost() {
  //   props.addProduct(form)
  // }

  peticionGet = () => {
    axios.get(url)
    .then(res => {
      this.setState({ data: res.data });
      console.log('productos', res.data);
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  peticionGetCat = () => {
    axios.get(urlCat)
    .then(res => {
      this.setState({ dataCat: res.data });
      console.log('categorias', res.data);
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  peticionPost = async () => {
    delete this.state.form.id;
    const formData = Object.entries(this.state.form).reduce((formData, [key, value]) => {
      formData.append(key, value);
      return formData;
    }, new FormData());

    await axios.post(url, formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(res => {
      this.modalInsertar();
      this.peticionGet();
    }).catch(error => {
      console.log(error.message);
    })
  }
  

  peticionPut = () => {
    axios.put(url + this.state.form.id, this.state.form)
    .then(res => {
      this.modalInsertar();
      this.peticionGet();
      console.log(res);
    })
  }

  peticionDelete = () => {
    axios.delete(url + this.state.form.id)
    .then(res => {
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
        id: prod.id,
        name: prod.name,
        brand: prod.brand,
        price: prod.price,
        stock: prod.stock,
        description: prod.description,
        category: prod.category,
        image: prod.image,
        //revisar la imagen 
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


  handleFileChange = async e => {
    e.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.files[0]

      }
    });
    console.log(this.state.form);
  }


  render() {
    const { form } = this.state;
    return (
      <div className="App">
        <br /><br /><br />
        <button className="btn btn-success"
          action='/uploads'
          method='POST'
          encType='multipart/form-data'
          onClick={() => {
            this.setState({ form: null, tipoModal: 'insertar' });
            this.modalInsertar()
          }}>Agregar Producto</button>
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
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(prod => {
              return (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>{prod.brand}</td>
                  <td>${prod.price}</td>
                  <td>{prod.stock}u</td>
                  <td>{prod.description}</td>
                  <td>{prod.category}</td>
                  <td><img src={`http://localhost:3001/static/${prod.image}`} class="image-thumbnail" /></td>
                  <td>
                    <button className="btn btn-primary"
                      onClick={() => {
                        this.selecProduct(prod);
                        this.modalInsertar()
                      }}><FontAwesomeIcon icon={faEdit} /></button>
                    {"   "}
                    <button className="btn btn-danger"
                      onClick={() => {
                        this.selecProduct(prod);
                        this.setState({ modalEliminar: true })
                      }}><FontAwesomeIcon icon={faTrashAlt} /></button>
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
            <form action='/uploads'
              method='POST' encType='multipart/form-data' >
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input className="form-control"
                  type="text" name="id" id="id"
                  readOnly onChange={this.handleChange}
                  value={form ? form.id : this.state.data.length + 1} />
                <br />
                <label htmlFor="name">Nombre</label>
                <input className="form-control"
                  type="text" name="name" id="name"
                  onChange={this.handleChange} value={form ? form.name : ''} />
                <br />
                <label htmlFor="brand">Marca</label>
                <input className="form-control"
                  type="text" name="brand" id="brand"
                  onChange={this.handleChange} value={form ? form.brand : ''} />
                <br />
                <label htmlFor="price">Precio</label>
                <input className="form-control"
                  type="number" name="price" id="price"
                  onChange={this.handleChange} value={form ? form.price : ''} />
                <br />
                <label htmlFor="stock">Stock</label>
                <input className="form-control"
                  type="number" name="stock" id="stock"
                  onChange={this.handleChange} value={form ? form.stock : ''} />
                <br />
                <FormGroup>
                  <Label for="exampleSelect">Categorias</Label>
                  <Input type="select" name="category" id="category"
                    onChange={this.handleChange}
                    value={form && form.category ? form.category : this.state.dataCat[0].name}>
                    {
                      this.state.dataCat.map(e => {
                        return <option className='' key={e.id}>{e.name}</option>
                      })
                    }
                  </Input>
                </FormGroup>
                <br />
                <label htmlFor="description">Descripcion</label>
                <input className="form-control"
                  type="text" name="description" id="description"
                  onChange={this.handleChange} value={form ? form.description : ''} />
                <br />
                <label htmlFor="image">Imagen</label>
                <input type="file" name="image" id="image"
                  onChange={this.handleFileChange} value=''
                  //onChange={(e) => {this.uploadImage(e)}}
                  />
                <br />
              </div>
            </form>
          </ModalBody>

          <ModalFooter>
            {this.state.tipoModal === 'insertar' ?
              <button className="btn btn-success"
                onClick={() => this.peticionPost()}>Insertar
                  </button> : <button className="btn btn-primary"
                onClick={() => this.peticionPut()}>Actualizar</button>
            }
            <button className="btn btn-danger"
              onClick={() => this.modalInsertar()}>Cancelar</button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
            Estás seguro que deseas eliminar el producto {form && form.name}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger"
              onClick={() => this.peticionDelete()}>Sí</button>
            <button className="btn btn-secundary"
              onClick={() => this.setState({ modalEliminar: false })}>No</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default CreateProductsScreen;