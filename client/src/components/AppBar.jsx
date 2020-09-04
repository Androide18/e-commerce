import React, { useState, useEffect } from "react";
import axios from 'axios';
import { AppBar, Toolbar, IconButton, Typography, Button, InputBase, Drawer } from '@material-ui/core'
import { Menu, AccountCircle } from "@material-ui/icons"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Divider from '@material-ui/core/Divider';

import { Link } from 'react-router-dom';
import StyleSheet from './StyleSheet.css';


export default function Appbar() {
  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState('left')
  const [infoCat, setInfoCat] = useState([])


  const handleDrawer = () => {
    setAnchor('left')
    setOpen(true)
  }

  const handleAccount = () => {
    setAnchor('right')
    setOpen(true)
  }

  useEffect(() => {
    axios.get('http://localhost:3001/category')
      .then(res => {
        setInfoCat(res.data)
        console.log(res.data);
      })
      .catch()
  }, [])



  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1 }}>
            <Link className='link' to='/'>
              E-COMMERCE
          </Link>
          </Typography>
          
          <SearchIcon />
          <InputBase
            placeholder="Busca tu producto"
            inputProps={{ 'aria-label': 'search' }}
          />
          <Button variant="contained" color="primary">
            Buscar
          </Button>
          <Button color='inherit'>
            <Link className='link' to='/product/new'>
              Nuevo Producto
            </Link>
          </Button>

          <Button color='inherit'>
            <Link className='link' to='/category/new'>
              Nueva Categoria
            </Link>
          </Button>
          <Button color='inherit'>
            <Link className='link' to='/login'>
              Login
          </Link>
          </Button>
          <Button color='inherit'>
            <Link className='link' to='/registro'>
              Registrarse
          </Link>
          </Button>
          <IconButton onClick={handleAccount} color='inherit' aria-label='account'>
            <AccountCircle />
          </IconButton>
          <IconButton color='inherit'>
            <Link className='link' to='/carrito'>
            <ShoppingCartIcon
            />
            </Link>

             </IconButton>
        </Toolbar>

        <Drawer
          anchor={anchor}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={{ height: '100%', padding: "20px" }}>
            {anchor === 'left' ?
              <div>
                <h5>Categorias</h5>
                <Divider />
                {
                  infoCat.map(cat => (
                    <li>{cat.name}</li>
                  ))
                }
              </div>
              :
              <div>
                <h5>Mi Perfil</h5>
                <Divider />
                <li>
                <Link className='lista'> 
                Configuracion
                </Link>
                </li>
                <li>
                <Link className='lista' to='/misordenes'>
                Mis ordenes
                </Link>
                </li>
                <li>
                <Link className='lista'> 
                Preguntas
                </Link> </li>
                <li>
                <Link className='lista'>
                  Reclamos
                </Link> 
                </li>
                <li>
                <Link className='lista'>
                  Seguridad
                </Link> 
                </li>
                <li>
                <Link className='lista'>
                  Alerta de búsqueda
                </Link>
                </li>
                <li>
                <Link className='lista'>
                  Salir
                </Link>
                </li>
              </div>
            }
          </div>
        </Drawer>
      </AppBar>




    </div>
  );
}