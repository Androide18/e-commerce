import React from 'react';
import './App.css';
import AppBar from '../src/components/AppBar';
import { AllProductsCRUD } from './components/AllProductsCRUD';


function App() {
  return (
    <div>
   
     <AppBar/>
    
     <div className='container center'>

        <AllProductsCRUD/>

      </div>
    </div>
  );
}

export default App;
