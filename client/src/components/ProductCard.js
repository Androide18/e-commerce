import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn } from "mdbreact";


const ProductCard = (props) => {
  return (
    <div>
      <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
        <Link to={'/products/' + props.id}>
          <MDBCardImage
            cascade
            top  // AQUI SE DEBE REEMPLAZAR POR PROPS.IMAGE
            src= {`http://localhost:3001/static/${props.image}`}
            waves
          />
        </Link>
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle tag="h5">{props.brand}</MDBCardTitle>
          <MDBCardTitle>
            <Link to={'/products/' + props.id}>
              <strong>{props.name}</strong>
            </Link>
          </MDBCardTitle>
          <MDBCardText>
            {props.description}
          </MDBCardText>
          <MDBCardFooter>
            <span className="float-left">${props.price}</span>


            <span className="float-right">
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
