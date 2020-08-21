import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from '../src/components/Home';
import {Products} from '../src/components/Products';
import {SearchBar} from '../src/components/SearchBar';


function App() {
  return (
    <div className="container">
      <div>
      <SearchBar/>
      </div>
      <div>
       <Home/>
      </div>
      <div>
      <Products/>
      </div>
    </div>
  );
}

export default App;
