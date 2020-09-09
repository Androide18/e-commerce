import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './components/Home';
import ProductComplete from '../src/pages/ProductComplete.js';
import CreateCategoryScreen from './components/CreateCategoryScreen';
import CreateProductScreen from './components/CreateProductScreen';
import AppBar from '../src/components/AppBar';
import Registro from '../src/components/Registro';
import Login from '../src/components/Login';
import Checkout from './components/Checkout';
import Orden from './components/Orden';
import MisOrdenes from './components/MisOrdenes';
import Carrito from './components/Carrito';

function App() {


  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {

    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();


    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
          <AppBar />
        <main className="main">
          <div>
            <Route exact path="/" component={Home} />
            <Route  path="/producto" component={ProductComplete} />
            <Route  path="/product/new" component={CreateProductScreen} />
            <Route  path='/category/new' component={CreateCategoryScreen} />
            <Route  path='/registro' component={Registro} />
            <Route  path='/login' component={Login} />
            <Route  path='/checkout' component={Checkout} />
            <Route  path='/carrito/:id?' component={Carrito} />
            <Route  path='/orden' component={Orden} />
            <Route  path='/misordenes' component={MisOrdenes} />
            {/* <Route path='*' component={NotFound} /> */}
          </div>
        </main>
        <footer className="footer">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;





{/* <nav>
      className={darkMode ? "dark-mode" : "light-mode"}
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>s
          </div>
      </nav> */}



      // div>
      // <header>
      //     <AppBar />
      //   </header>
      //   <main className="main">
      //     <div>
      //       <Route exact path="/" component={Home} />
      //       <Route exact path="/producto" component={ProductComplete} />
      //       <Route exact path='/formulario' component={FormIngresos} />
      //       <Route exact path='/registro' component={Registro} />
      //       <Route exact path='/login' component={Login} />
      //       <Route path='*' component={NotFound} />
      //     </div>
      //   </main>
      //   <footer className="footer">All Rights Reserved</footer>
      // </div>