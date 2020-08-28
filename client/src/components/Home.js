import React,{Component} from 'react';
import { Carousel } from 'react-bootstrap';
import { colors } from '@material-ui/core';

export class Home extends Component {
    render(){
        return(
            <div>
            <h3>Welcome to E-commerce!</h3>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-90"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnKiPV873YOs7dD9x9RQW8pLbaCDCO8VJlXw&usqp=CAU"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Zapatillas Nike</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-90"
                        src="data:image/jpeg;base64,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"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Zapatillas Adidas</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-90"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4UTAN4tGnX4G9bxs1ogBUSlakkisXHSJE2g&usqp=CAU"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Zapatillas Puma</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                 </Carousel>
            </div>
        )
    }
}