import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Rights from '../src/components/Rights';
import Home from './components/Home';
import ProductCard from './components/ProductCard.js';
import ProductScreen from './components/ProductScreen';
import Categories from './components/Categories';
import ProdCategoryScreen from './components/ProdCategoryScreen';
import CreateProductScreen from './components/CreateProductScreen';


function App() {

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };


  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">E-commerce</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Crear categoria</a>
            <Link to="/products/create">Cargar producto</Link>
          </div>
        </header>
        <main className="main">
          <Route path="/" exact={true} component={Home} />
          <Route path="/category/:id" component={ProdCategoryScreen} />
          <Route path="/products/:id" component={ProductScreen}/>
          <Route path="/products/create" component={CreateProductScreen}/>
          <Route path="/category/create" component={CreateProductScreen}/>
        </main>
        <aside className="sidebar">
          <h3>Categorias</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <Categories/>
        </aside>
        <footer className="footer">
          <Rights />
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
