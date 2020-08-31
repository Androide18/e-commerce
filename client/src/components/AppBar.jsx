import React, { useState, useEffect } from "react";
import axios from 'axios';
import { AppBar, Toolbar, IconButton, Typography, Button, InputBase, Drawer } from '@material-ui/core'
import { Menu, AccountCircle } from "@material-ui/icons"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Divider from '@material-ui/core/Divider';


export default function Appbar() {
  const [infoCat, setInfoCat] = useState([])
  
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