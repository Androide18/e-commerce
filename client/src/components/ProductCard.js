import React from "react";
import { MDBRow, MDBContainer,MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBIcon, MDBBtn } from "mdbreact";
import { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    return (
      <MDBContainer>
      <MDBRow >
      <MDBCol> 
       <MDBCard className="m-2" style={{ width: "18rem"}} cascade ecommerce wide>
        <MDBCardImage
          cascade
          top
          src="https://c0.wallpaperflare.com/preview/160/195/615/pair-of-white-black-and-red-air-jordan-1-s.jpg" 
          waves
        />
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle tag="h5">Categoria</MDBCardTitle>
          <MDBCardTitle>
            <a href="#!">
              <strong>Nombre de producto</strong>
            </a>
          </MDBCardTitle>
          <MDBCardText>
            Descripcion
        </MDBCardText>
          <MDBCardFooter>
            <span className="float-left">$49</span>
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
      </MDBCol>

      <MDBCol> 
       <MDBCard className="m-2" style={{ width: "18rem"}} cascade ecommerce wide>
        <MDBCardImage
          cascade
          top
          src="https://c0.wallpaperflare.com/preview/160/195/615/pair-of-white-black-and-red-air-jordan-1-s.jpg" 
          waves
        />
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle tag="h5">Categoria</MDBCardTitle>
          <MDBCardTitle>
            <a href="#!">
              <strong>Nombre de producto</strong>
            </a>
          </MDBCardTitle>
          <MDBCardText>
            Descripcion
        </MDBCardText>
          <MDBCardFooter>
            <span className="float-left">$49</span>
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
      </MDBCol>

      <MDBCol> 
       <MDBCard className="m-2" style={{ width: "18rem"}} cascade ecommerce wide>
        <MDBCardImage
          cascade
          top
          src="https://c0.wallpaperflare.com/preview/160/195/615/pair-of-white-black-and-red-air-jordan-1-s.jpg" 
          waves
        />
        <MDBCardBody cascade className="text-center">
          <MDBCardTitle tag="h5">Categoria</MDBCardTitle>
          <MDBCardTitle>
            <a href="#!">
              <strong>Nombre de producto</strong>
            </a>
          </MDBCardTitle>
          <MDBCardText>
            Descripcion
        </MDBCardText>
          <MDBCardFooter>
            <span className="float-left">$49</span>
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
      </MDBCol>

      </MDBRow>
    </MDBContainer>
    )
  }
}
