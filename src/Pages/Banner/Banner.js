import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../images/banner/img_04.jpg';
import banner2 from '../../images/banner/img_07.jpg';
import banner3 from '../../images/banner/img_09.jpg';

const Banner = () => {
    return (
        <div>
            <Container fluid>
        <Row>
        <Col  sm={7}>
            <Carousel>
            <Carousel.Item>
           <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
             />
            <Carousel.Caption>
            <h3>The ultimate relaxing dental experience</h3>
            <p>Any dental practice that offers patients a more relaxing experience.</p>
            </Carousel.Caption>
            </Carousel.Item>
          <Carousel.Item>
         <img
            className="d-block w-100"
        src={banner2}
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3 style={{color:'black'}}>Enjoy your new dazzling smile</h3>
        <p>Any dental practice that offers patients a more relaxing experience.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Best Dental Clinic in the World</h3>
      <p>Any dental practice that offers patients a more relaxing experience</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Col>
<Col sm={5}>
            <div className="inputs">
                <input type="text" className="form-control" placeholder="Patient Name" />
                <br/>
                <input type="phone" className="form-control" placeholder="Mobile Number"/>
                <br/>
                <input type="address" className="form-control" placeholder="Address"/>
                <br/>
                <input type="age" className="form-control" placeholder="Age"/>
                <br/>
            </div>
            <div>
                <button style={{backgroundColor:'darkCyan'}} >Booking</button>
               
                </div>
                
</Col>
</Row>
</Container>
        </div>
    );
};

export default Banner;