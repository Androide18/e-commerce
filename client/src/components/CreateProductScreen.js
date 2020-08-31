import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';



function ProductsScreen(props) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const [infoProd, setInfoProd] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(res => {
        setInfoProd(res.data)
      })
      .catch()
  }, [])

  // function createProd() {
  //   axios.post('http://localhost:3001/products', {
  //     Name: 'Musculosa',
  //     Description: 'Musculosa multiples colorres',
  //     Price: 700,
  //     Stock: 12,
  //     Category: 'Remeras'
  //   })
  //   .then(res => {
  //     console.log(res, 'se creo el producto')
  //   })
  // }

  return (
    <div className="content content-margined">
      <div className="product-header">
      </div>
      <div className="form">
        <form>
          <ul className="form-container">
            <li>
              <h2>Crear producto</h2>
            </li>
            <li>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                id="name"
              ></input>
            </li>
            <li>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                value={price}
                id="price"

              ></input>
            </li>
            <li>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                value={image}
                id="image"

              ></input>
              <input type="file"></input>
            </li>
            <li>
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                name="brand"
                value={brand}
                id="brand"

              ></input>
            </li>
            <li>
              <label htmlFor="countInStock">CountInStock</label>
              <input
                type="text"
                name="countInStock"
                value={countInStock}
                id="countInStock"

              ></input>
            </li>
            <li>
              <label htmlFor="name">Category</label>
              <input
                type="text"
                name="category"
                value={category}
                id="category"

              ></input>
            </li>
            <li>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={description}
                id="description"

              ></textarea>
            </li>
            <li>
              <button type="submit" className="button primary">
                Crear Producto
              </button>
            </li>
          </ul>
        </form>
      </div>

      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {infoProd.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.name}</td>
                <td>
                  <button className="button">
                    Edit
                  </button>{' '}
                  <button
                    className="button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductsScreen;
