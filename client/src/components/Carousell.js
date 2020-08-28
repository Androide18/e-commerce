import React from 'react';
import './Carousell.css'
import { Carousel } from 'react-bootstrap';
import camisas from '../imagenes/ropa01.jpeg';
import pantalon from '../imagenes/ropa04.jpeg';
import corbata from '../imagenes/ropa08.jpeg';

function Carousell() {
    return (
    <div className='carouselContainer' >
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={corbata}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={camisas}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pantalon}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    )
}
export default Carousell;