import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div>
             
    <Container fluid>
      <Row>
    <Col className="text-center footer-site">
        
          <p >Copyright &copy; 2017 All Rights Reserved by 
      <p>Faisal Ahmad</p>
          </p>

     </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Footer;