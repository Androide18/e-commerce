import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from "@material-ui/core/styles";
import {  Button, InputBase } from '@material-ui/core'


export default function SearchBar() {
    const classes = useStyles();
  
    const [input, setInput] = useState('');
  
    const validate = ()=>{
      if(input !== ''){
          return <Link to={'/search?query=' + input} ><i></i></Link>
      }
      else{
          return <i></i>
      }
  }
  
    const onChangeBusqueda = (event) => {
        setInput(event.target.value);
      console.log('busqueda', input);
    }

  
    const filtrarBuscqueda = () => {
  
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

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form action="/search">
                <InputBase
                  type='search'
                  name='query'
                  placeholder="Busca tu producto"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={onChangeBusqueda}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
                <Button type='submit'
                  value='Buscar'
                  variant="contained"
                  color="primary"
                  onClick={() => validate()}
                >
                  Buscar
  
            </Button>
              </form>
            </div>
           
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
      padding: theme.spacing(0, 2),
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
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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