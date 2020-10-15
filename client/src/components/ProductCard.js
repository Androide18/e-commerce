import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import lightGreen from '@material-ui/core/colors/lightGreen' //color de la fuente
import { connect } from 'react-redux';
import { addBasket, postProductToCart } from '../actions/addBasketAction';
import { addToCart, getProductFromCart } from "../actions/cartActions";
import { Height } from "@material-ui/icons";

const ProductCard = (props) => {
 
  const [qty, setQty] = useState(5);
  //const [quantity, setQuantity] = useState(1);
  //const [loading, setLoading] = useState(false)
  //const [error, setError] = useState(false)
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const useStyles = makeStyles({
    Card: {
       width: 240,
      height: 420,
      margin: 'auto'
    },
    Media: {
      height: "250px",
      paddingTop: '0%',
    }
  });
  const classes = useStyles();

  const handleAddtoCart = async () => {
   await dispatch(addBasket(props))
   await dispatch(addToCart(props))
   await dispatch(getProductFromCart())
  }

  return (
    <div className='card'>
      <Card className={classes.Card}>
        <CardActionArea>
          <Link to={'/products/' + props.id}>
            <CardMedia
              className={classes.Media}
              component="img"
              image={`http://localhost:3001/static/${props.image}`}
              title="Imagen producto"
            />
          </Link>
          <CardContent>
            <Link to={'/products/' + props.id}>
              <Typography variant="h4" component="h2">
                {props.name}
              </Typography>
            </Link>
            <Typography style={{ color: lightGreen['800'] }} variant="h5" color="textPrimary" component="h1">${props.price}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <li>
            Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
              {[...Array(props.stock).keys()].map(x =>
                <option value={x + 1}>{4 + 1}</option>
              )}
            </select>
          </li> */}
          <Button size="small" color="primary"
            //onClick={() => props.addBasket(props)} 
            onClick={handleAddtoCart}
          >
            {/* <Typography variant='h6'>
              AÑADIR AL CARRITO
            </Typography> */}
            <ShoppingCartIcon fontSize="inherit" style={{ fontSize: "35px" }} />
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default connect(null, { addBasket })(ProductCard);