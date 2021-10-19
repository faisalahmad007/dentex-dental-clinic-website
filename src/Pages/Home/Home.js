import React from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Home.css';
import patient1 from '../../images/client_01.jpg';
import patient2 from '../../images/client_02.jpg';
import patient3 from '../../images/client_03.jpg';


const Home = () => {
    
   return (
       <div>
          <Banner></Banner>
          
          <Container>
              <Row>
              <h2 className="text-center">Our News</h2>
                  <Col md={4}>
                      
                      <div className="cards">
                        <div className="contents">
                           <h2>News</h2>
                           <p>
                           Free consultation of a specialist with the use of a visualization system!
                           </p>
                           <Link>Read More</Link>
                        </div>
                      </div>
                  </Col>
                  <Col md={4}>
                  <div className="cards">
                        <div className="contents">
                           <h2>News</h2>
                           <p>
                           Free consultation of a specialist with the use of a visualization system!
                           </p>
                           <Link>Read More</Link>
                        </div>
                      </div>
                  </Col>
                  <Col md={4}>
                  <div className="cards">
                        <div className="contents">
                           <h2>News</h2>
                           <p>
                           Free consultation of a specialist with the use of a visualization system!
                           </p>
                           <Link>Read More</Link>
                        </div>
                      </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
              <h2 className="text-center">Our Clients</h2>
                  <Col md={4}>
                  <Card style={{ width: '10rem' }} className="card-area">
            <Card.Img variant="top" src={patient1} alt="displayimage"/>
            <Card.Body className="card-line">
           <Card.Title>Abdullah khan</Card.Title>
          <Card.Text style={{ fontSize: '1rem' }} >
                   Patient
          </Card.Text>
         </Card.Body>
         </Card>
                      
                  </Col>
                  <Col md={4}>
                  <Card style={{ width: '10rem' }} className="card-area">
            <Card.Img variant="top" src={patient2} alt="displayimage"/>
            <Card.Body className="card-line">
           <Card.Title>Mario jagolo</Card.Title>
          <Card.Text style={{ fontSize: '1rem' }} >
                   Patient
          </Card.Text>
         </Card.Body>
         </Card>
                  </Col>
                  <Col md={4}>
                  <Card style={{ width: '10rem' }} className="card-area">
            <Card.Img variant="top" src={patient3} alt="displayimage"/>
            <Card.Body className="card-line">
           <Card.Title>Abu salah</Card.Title>
          <Card.Text style={{ fontSize: '1rem' }} >
                   Patient
          </Card.Text>
         </Card.Body>
         </Card>
                  </Col>
              </Row>
          </Container>
          </div>
               
     ) 

            
 }
export default Home;