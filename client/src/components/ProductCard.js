import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn } from "mdbreact";
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';


function ProductCard(props) {
const [qty, setQty] = useState (1);
const productDetails = useSelector(state => state.productDetails);
const {product, loading, error} = productDetails;
const dispatch = useDispatch();

 useEffect(() => {
   dispatch(detailsProduct(props.match.params.id));
   return () => {
     //
   };
 }, [])

 const handleAddtoCart = () =>{
   props.history.push("/carrito/" + props.match.params.id + "?qty=" + qty)
 }

  return (
    <div>
      {loading ? <div>Cargando...</div>:
      error ? <div>{error}</div>:
      (
        <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
        <Link to={'/products/' + props.products.id}>
          <MDBCardImage
            cascade
            top  // AQUI SE DEBE REEMPLAZAR POR PROPS.IMAGE
<<<<<<< HEAD
            src= {`http://localhost:3001/static/${props.image}`}
=======
            src={props.products.image}

>>>>>>> 19e065073f0a5c2220db8445be7555c055a3ecc8
            waves
          />
        </Link>
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle tag="h5">{props.product.brand}</MDBCardTitle>
          <MDBCardTitle>
            <Link to={'/products/' + porops.products.id}>
              <strong>{props.products.name}</strong>
            </Link>
          </MDBCardTitle>
          <MDBCardText>
            {product.description}
          </MDBCardText>
          <MDBCardFooter>
            <span className="float-left">${props.products.price}</span>
            <li>
              Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
              {[Array(props.products.countInStock).keys()].map(x=>
              <option value={x+1}>{x+1}</option>
              )}
              </select>
            </li>
            <span className="float-right">
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon /> 
                {props.products.countInStock > 0 ? <button onClick={handleAddtoCart}/>
                :
                <div>Sin Stock</div> }
              </IconButton>
              <MDBTooltip placement="top">
                <MDBBtn tag="a" href="https://mdbootstrap.com" target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
                  <MDBIcon icon="share-alt" />
                </MDBBtn>
                <div>Compartir</div>
              </MDBTooltip>
              <MDBTooltip placement="top">
                <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                  <MDBIcon icon="heart" className="red-text" />
                </MDBBtn>
                <div>Añadir a Favoritos</div>
              </MDBTooltip>
            </span>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
      )
    }
    </div>
  )
}
export default ProductCard;


{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src='/Users/fabricio/Documents/wp02-ecommerce-g1/api/public/cualquiera.jpg' />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 */}
