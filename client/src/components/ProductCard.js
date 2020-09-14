import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import lightGreen from '@material-ui/core/colors/lightGreen' //color de la fuente
import { connect } from 'react-redux';
import { addBasket } from '../actions/addBasketAction';

  const ProductCard = (props) => {
    console.log(props);
  //const [qty, setQty] = useState(1);
  //const productDetails = useSelector(state => state.productDetails);
//import { detailsProduct } from '../actions/productActions';
  //const [quantity, setQuantity] = useState(1);
  //const productDetails = useSelector((state) => state.productDetails);
  //const [loading, setLoading] = useState(false)
  //const [error, setError] = useState(false)
  //const dispatch = useDispatch();

  const useStyles = makeStyles({
    Card: {
      // width: 180,
      height: 290,
      margin: 'auto'
    },
    Media: {
      height: '143px',
      width: '143px',
      objectFit: 'cover'
    }
  });
  const classes = useStyles();

  // useEffect(() => {
  //   dispatch(detailsProduct(props.match.params.id));
  //   console.log(props.match.params.id);
  //   return () => {
  //     //
  //   };
  // }, [])

  // const handleAddtoCart = () => {
  //   props.history.push("/carrito/" + props.match.params.id + "?quantity=" + quantity)
  // }

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
          <Button size="large" color="primary" onClick={() => props.addBasket(props)} >
            <Typography variant='h6'>
            AÑADIR AL CARRITO
            </Typography>
        </Button>
        </CardActions>
      </Card>
    </div>
  )
}


export default connect(null, { addBasket })(ProductCard);