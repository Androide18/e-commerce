import React, { useState } from 'react';
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
import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton, TwitterLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import '../index.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

//-----------------------------------------------------------------------

// var axios = require('axios');
// var data = JSON.stringify({"email": req.body.email,"password": req.body.password});

// var config = {
//   method: 'post',
//   url: 'http://localhost:3001/users/login',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log('response', response);
// })
// .catch(function (error) {
//   console.log(error);
// });


//-----------------------------------------------------------------------




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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Login(props) {

  const [form, setForm] = useState(
    {
      email: '',
      password: ''
    });

  console.log('form', form)

  const handleChange = async e => {
    e.preventDefault();
    e.persist();
    await setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log('e', e.target.value)
  }

  const enviarDatos = (event) => {
    event.preventDefault();

    var data = JSON.stringify({ "email": form.email, "password": form.password });

    axios({
      method: 'post',
      url: 'http://localhost:3001/users/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    }
    )
      .then(function (response) {
        console.log('axios response', response);
      })
      .catch(function (error) {
        console.log('axios error', error);
      });
  }


  const classes = useStyles();

  // const estado = useSelector(state => state.getUsers)
  // console.log('useSelector', estado)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingresar
        </Typography>
        <form onSubmit={enviarDatos} className={classes.form} noValidate>
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Direccion de correo electronico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olviste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/registro' href="#" variant="body2" >
                {"No tenes cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </form>

      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}