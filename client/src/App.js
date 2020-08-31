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
import UploadForm from '../src/components/UploadForm';
import Rights from '../src/components/Rights';
import Registro from '../src/components/Registro';
import Login from '../src/components/Login';

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
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
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
      </nav>
      <React.StrictMode>
      <BrowserRouter>
      <header> 
      <AppBar/> 
      <Home/>
      </header>
      <main>
      
      <Switch>
          <Route exact path="/" component={Guest} />
          <Route exact path="/producto" component={ProductComplete} />
          <Route exact path='/formulario' component={FormIngresos} />
          <Route exact path='/registro' component={Registro} />
          <Route exact path='/login' component={Login} />
          <Route path='*' component={NotFound} />
      </Switch>
      </main>
      <footer><Rights/></footer>
      </BrowserRouter>
    </React.StrictMode>
    </div>
  );
}
export default App;
