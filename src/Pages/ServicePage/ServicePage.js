import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row,Col, CardGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ServicePage.css';


const ServicePage = () => {
    const [services,setServices] = useState([]);
    useEffect(()=> {
       
        fetch('/services.json')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
    <div className="">
        
    
       
     <Container fluid>
     <h2 className="text-center service-area ">Our Services</h2>
       <Row xs={1} md={3} className="g-4">
        
        {
            services.map(service =>
          <CardGroup key={service._id}>
            <Card style={{ width: '10rem' }} className="card-area">
            <Card.Img variant="top" src={service.img} alt="displayimage"/>
            <Card.Body className="card-line">
           <Card.Title>Service ID: {service?._id}</Card.Title>
          <Card.Text style={{ fontSize: '1rem' }} >
                    Service Name: {service.name}
          </Card.Text>
         <Button variant="danger" style={{backgroundColor:'darkCyan'}}>
             <NavLink style={{ textDecoration: 'none', color: 'black'}}
              to={`/servicepage/${service?._id}`}
             >See More</NavLink></Button>
         </Card.Body>
         </Card>
         </CardGroup>   
             )
        }
    
    </Row> 
    </Container>
    </div>
    );
};

export default ServicePage;