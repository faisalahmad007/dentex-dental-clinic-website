import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './SingleService.css';

const SingleService = () => {
    
    const {_id} = useParams();
    const[serviceDetails,setServiceDetails] = useState([]);
    const[singleService,setSingleService] = useState([]);

    useEffect(() => {

        fetch('/servicesDetails.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data.service))
    },[])

    useEffect(() => {
        
      const foundDetails = serviceDetails.find(service=> service._id=== _id)
         setSingleService(foundDetails);
    },[serviceDetails])
    return (
        <div  >
            <h2 className="text-center service-details">Service Details</h2>
        <Container>
         <Row>
         
         <Col md={8} >
           
            <Card style={{ width: '20rem', marginLeft:'20rem' }}>
            <Card.Img variant="top" src={singleService?.img} alt="displayimage"/>
            <Card.Body>
           <Card.Title>Service ID: {_id}</Card.Title>
          <Card.Text style={{ fontSize: '1rem',width: '18rem', marginLeft:'auto',marginRight:'auto' }} >
                    Service Description: {singleService?.description}
          </Card.Text>
          <Card.Title>Cost:{singleService?.cost}</Card.Title>
         </Card.Body>
         </Card>
         </Col>
         </Row>
         </Container>      
</div>
    );
};

export default SingleService;