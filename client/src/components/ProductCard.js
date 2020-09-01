import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn } from "mdbreact";


function ProductCard(props) {
  return (
    <div>
      <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
          <Link to={'/products/' + props.id}>
            <MDBCardImage
            cascade
            top  // AQUI SE DEBE REEMPLAZAR POR PROPS.IMAGE
            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(2).jpg"
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
                <div>Share</div>
              </MDBTooltip>
              <MDBTooltip placement="top">
                <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                  <MDBIcon icon="heart" className="red-text" />
                </MDBBtn>
                <div>Added to Wishlist</div>
              </MDBTooltip>
            </span>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default ProductCard;
