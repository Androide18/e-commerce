import React from 'react';
import { AllProductsCRUD } from './components/AllProductsCRUD';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from '../src/components/Home';
import Guest from '../src/pages/Guest.js';
import ProductComplete from '../src/pages/ProductComplete.js';
import NotFound from '../src/pages/NotFound.js'
import './App.css';
import FormIngresos from './pages/FormIngresos.js';
import AppBar from '../src/components/AppBar';
import Rights from '../src/components/Rights';

function App() {
  return (
    <React.StrictMode>
      <AppBar/>
      <Home/>
      <Guest/>
        <AllProductsCRUD/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Guest} />
          <Route path="/producto" component={ProductComplete} />
          <Route path='/formulario' component={FormIngresos} />
          <Route path= '*' component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Rights/>
    </React.StrictMode>
  );
}
export default App;
