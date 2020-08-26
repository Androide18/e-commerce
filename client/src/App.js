import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from '../src/components/Home';
import {Products} from '../src/components/Products';
// import {SearchBar} from '../src/components/SearchBar';
import {ProductCard} from '../src/components/ProductCard';
import AppBar from '../src/components/AppBar';


function App() {
  return (
    <div>
   
      <AppBar/>
    
     <div className="container">
      <ProductCard/>
      <div className="container">
        <form action="/images/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="image"/>
            <button type="submit">
                Save
            </button>
        </form>
  
     </div>
   
      <Products/>
      </div>
    </div>
  );
}

export default App;
