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
import { detailsProduct } from '../actions/productActions';

function ProductCard(props) {
  const [quantity, setQuantity] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const dispatch = useDispatch();

  
  const useStyles = makeStyles({
    Card: {
      width: 143,
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

  const handleAddtoCart = () => {
    props.history.push("/carrito/" + props.match.params.id + "?quantity=" + quantity)
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
              <Typography gutterBottom variant="h5" component="h2">
                {props.name}
              </Typography>
            </Link>
            <Typography style={{ color: lightGreen['800'] }} variant="body2" color="textPrimary" component="h1">${props.price}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleAddtoCart} size="small" color="primary" onm>
            AÑADIR AL CARRITO
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}


export default ProductCard;