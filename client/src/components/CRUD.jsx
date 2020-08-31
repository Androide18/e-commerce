import React, { Component } from "react";




export default class CRUD extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      id: null,
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      image: "",

      published: false,
      submitted: false
    };
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangeStock(e) {
    this.setState({
      stock: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }

  onChangeImage(e) {
    this.setState({
      image: `${e.target.value} + .jpg`
    });
  }

  saveProduct() {
    var data = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      stock: this.state.stock,
      category: this.state.category,
      image: this.state.image

    };
    console.log(data);
  }

  //     ProductDataService.create(data)
  //       .then(response => {
  //         this.setState({
  //           id: response.data.id,
  //           name: response.data.name,
  //           description: response.data.description,
  //           published: response.data.published,
  //           submitted: true
  //         });
  //         console.log(response.data);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });


  newProduct() {
    this.setState({
      id: null,
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      image: "",

      published: false,
      submitted: false
    });
  }

  render() {
    return (
      <div className="center right">
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newProduct}>
                Add
            </button>
            </div>
          ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={this.state.name}
                    onChange={this.onChangename}
                    name="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    required
                    value={this.state.price}
                    onChange={this.onChangePrice}
                    name="price"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="stock">Stock</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stock"
                    required
                    value={this.state.stock}
                    onChange={this.onChangeStock}
                    name="stock"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    required
                    value={this.state.category}
                    onChange={this.onChangeCategory}
                    name="category"
                  />
                </div>

                <div>

                  <input
                    type="file"
                    id="image"
                    required
                    value={this.state.image}
                    onChange={this.onChangeImage}
                    name="image"
                  />
                </div>

                <button onClick={this.saveProduct} className="btn btn-success">
                  Crear Producto
            </button>
              </div>
            )}
        </div>
      </div>
    );
  }
}











// export default function CRUD() {

//     var styles1 = {
//         margin: '400px',
//       };


//     return (
//         <div className="container">
//                 <div className="row">
//                     <form >
//                         <div className="input-button">

//                         <div className="square-box" style={styles1}>

//                             <input type="text"/>
//                             <button className="btn btn-success" type="submit">Crear Producto</button>
//                             <button className="btn btn-warning" type="submit">Editar</button>
//                             <button className="btn btn-red" type="submit">Eliminar</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//     )
// }