import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Registro(props) {

    const [state, setState] = useState({
      firstname:"", 
      lastname:"", 
      // phone:"", 
      // address:"", 
      //role:"", 
      email:"", 
      password:""
    });


    const handleInputChange = (event) => {
     setState({
          ...state,
          [event.target.name] : event.target.value
      })
  }
  const enviarDatos = (event) => {
    event.preventDefault();

    const usuario = {
      firstname: state.firstname,
      lastname: state.lastname,
      email: state.email,
      password: state.password,
     
    };
    axios({
      method: 'post',
      url: 'http://localhost:3001/users/register',
      data: usuario
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
    
  }
    


  
    
    const classes = useStyles();
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <form onSubmit={enviarDatos} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  label="Nombre"
                  autoFocus
                  onChange={handleInputChange}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastname"
                  label="Apellido"
                  name="lastname"
                  autoComplete="lname"
                  onChange={handleInputChange}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Direccion de correo electronico"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInputChange}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Quiero recibir notificaciones y promociones por correo electronico"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}

            >
              Registrate
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to='/login' href="#" variant="body2">
                  Ya tenés cuenta? Ingresá
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    )
  };
  

