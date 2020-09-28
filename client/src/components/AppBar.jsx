
import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, IconButton, Typography, Button, InputBase, Drawer } from '@material-ui/core'
import { AccountCircle } from "@material-ui/icons"
import SearchIcon from '@material-ui/icons/Search';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { fade, makeStyles } from "@material-ui/core/styles";
import { connect, useDispatch } from 'react-redux';
import { getNumbers } from '../actions/getBasketAction';
import fetchProduct from "../actions/searchProduct";


  function Appbar(props) {
 

    useEffect(() => {
      getNumbers();
    }, [])

  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState('left')
  const [infoCat, setInfoCat] = useState([])

  const classes = useStyles();
  const [busqueda, setBusqueda] = useState("")
  
  
  const dispatch = useDispatch();
  const [product_name, set_product_name] = useState('')
  console.log('product_name', product_name)

  const onChangeBusqueda = (event) => {
    setBusqueda(event.currentTarget.value);
    console.log('busqueda', busqueda);
  }


  const handleDrawer = () => {
    setAnchor('left')
    setOpen(true)

  }

  const handleAccount = () => {
    setAnchor('right')
    setOpen(true)
  }

  // useEffect(() => {
  //   axios.get('http://localhost:3001/category')
  //     .then(res => {
  //       setInfoCat(res.data)
  //       console.log(res.data);
  //     })
  //     .catch()
  // }, [])



  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4' style={{ flexGrow: 1 }}>
            <Link className='link' to='/'>
              E-COMMERCE
          </Link>
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
              <InputBase
                fontSize="inherit" style={{ fontSize: "13px" }}
                type='search'
                name='query'
                value={product_name}
                placeholder="Busca tu producto"
                inputProps={{ 'aria-label': 'search' }}
                onChange={
                  (event) => { 
                    set_product_name(event.target.value); 
                  }
                }
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              <Button type='submit'
                fontSize="inherit" style={{ fontSize: "13px" }}
                value='Buscar'
                variant="contained"
                color="primary"
                onClick={() => {dispatch(fetchProduct(product_name))}}
              >
                <Link className='link' to='/search'>Buscar</Link>
          </Button>
            
          </div>

          <Button color='inherit' fontSize="inherit" style={{ fontSize: "12px" }}>
            <Link className='link' to='/product/new'>Nuevo Producto</Link>
          </Button>
          <Button color='inherit' fontSize="inherit" style={{ fontSize: "12px" }}>
            <Link className='link' to='/category/new'>Nueva Categoria</Link>
          </Button>
          <Button color='inherit'fontSize="inherit" style={{ fontSize: "12px" }}>
            <Link className='link' to='/login'>Login</Link>
          </Button>
          <Button color='inherit'fontSize="inherit" style={{ fontSize: "12px" }}>
            <Link className='link' to='/registro'>Registrarse</Link>
          </Button>
          <IconButton onClick={handleAccount} color='inherit' aria-label='account'>
            <AccountCircle fontSize="inherit" style={{ fontSize: "20px" }} />
          </IconButton>
          <IconButton color='inherit'>
            <Link className='link' to='/users/1/cart'>
               {/* el badge es la cantidad de items en el carro */}
              <Badge badgeContent={props.basketProps.basketNumbers} color="secondary"> 
                <ShoppingCartIcon fontSize="inherit" style={{ fontSize: "20px" }} />
              </Badge>
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
                {/* {
                  infoCat.map(cat => (
                    <li>{cat.name}</li>
                  ))
                } */}
              </div> : <div>
                <h5>Mi Perfil</h5>
                <Divider />
                <li>
                  <Link className='lista'>Configuracion</Link>
                </li>
                <li>
                  <Link className='lista' to='/carrito'>Mis ordenes</Link>
                </li>
                <li>
                  <Link className='lista'>Preguntas</Link>
                </li>
                <li>
                  <Link className='lista'>Reclamos</Link>
                </li>
                <li>
                  <Link className='lista'>Seguridad</Link>
                </li>
                <li>
                  <Link className='lista'>Alerta de búsqueda</Link>
                </li>
                <li>
                  <Link className='lista'>Salir</Link>
                </li>
              </div>
            }
          </div>
        </Drawer>
      </AppBar>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: "white",
  },
  inputInput: {
    padding: theme.spacing(0, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));


  const mapStateToProps = state => ({
    basketProps: state.basket
  })

export default connect(mapStateToProps, { getNumbers })(Appbar);
