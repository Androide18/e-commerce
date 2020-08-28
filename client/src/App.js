import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Guest from '../src/pages/Guest.js';
import ProductComplete from '../src/pages/ProductComplete.js';
import NotFound from '../src/pages/NotFound.js'
import './App.css';
import FormIngresos from './pages/FormIngresos.js';
import SearchBar from './components/SearchBar.js';
import Carousell from './components/Carousell';
import { Row } from 'react-bootstrap';



function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <div>
      <SearchBar />
      <Carousell />

      
        <Row>
        <Switch>
          <Route exact path="/home" component={Guest} />
          <Route path="/home/producto" component={ProductComplete} />
          <Route path='/home/formulario' component={FormIngresos} />
          <Route component={NotFound} />
        </Switch> 
        </Row>
        
      </div>
      </BrowserRouter>
      
    </React.StrictMode>
  );
}

export default App;
