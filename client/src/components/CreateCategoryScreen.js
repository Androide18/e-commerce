import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';



function ProductsScreen(props) {
  
  const [infoProd, setInfoProd] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(res => {
        setInfoProd(res.data)
      })
      .catch()
  }, [])




  return (
    <div className="content content-margined">
      <div className="product-header">
      </div>
      <div className="form">
        <form>
          <ul className="form-container">
            <li>
              <h2>Crear Category</h2>
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
                {id ? 'Update' : 'Create'}
              </button>
            </li>
            <li>
              <button
                type="button"

                className="button secondary"
              >
                Back
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
              <tr key={product._id}>
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
                    className="button"
                  >
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
