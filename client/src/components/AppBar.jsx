import React, { useState, useEffect } from "react";
import axios from 'axios';
import { AppBar, Toolbar, IconButton, Typography, Button, InputBase, Drawer } from '@material-ui/core'
import { Menu, AccountCircle } from "@material-ui/icons"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Divider from '@material-ui/core/Divider';
import {Link}  from 'react-router-dom';
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
          <IconButton onClick={handleDrawer} color='inherit' edge='start' aria-label='menu'>
            <Menu />
          </IconButton>
          <Typography variant='h6' style={{ flexGrow: 1 }}>
          <Link className='link' to='/'>
            E-COMMERCE
          </Link>
          </Typography>
          <SearchIcon />
          <InputBase
            placeholder="Busca tu producto.."
            inputProps={{ 'aria-label': 'search' }}
          />
          <Button variant="contained" color="primary">
            Buscar
          </Button>
          <Button color='inherit'>
            <Link className='link' to='/'>
            Catalogo
            </Link>
          </Button>

          <Button color='inherit'>
            <Link className='link' to='/formulario'>
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
          <IconButton>
            <ShoppingCartIcon
            />
          </IconButton>
        </Toolbar>
      </AppBar>

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
                <li>{cat.Name}</li>
                ))
              }
            </div>
            :
            <div>
              <h5>Login</h5>
              <Divider />
              <li>Usuario</li>
              <li>Administrador</li>
            </div>
          }
        </div>
      </Drawer>
    </div>
  );
}