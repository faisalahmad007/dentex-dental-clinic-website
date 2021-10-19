import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import register from '../../images/registration.jpg';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const{ signInUsingGoogle, user,handleRegistration,error,createNewUser,handleEmailChange,
        handlePasswordChange,processLogin}  = useAuth();

   
    return (
        <div className="text-center">
            <h2>Register</h2>
            <Container>
             <Row>
            <Col md={7}>
            <form onSubmit={handleRegistration}>
                 <input  type="email" onBlur={handleEmailChange}className="form-control" placeholder="Email" required />
                <input  type="password" onBlur={handlePasswordChange} className="form-control" placeholder="Password" required/>
            <div>
            <div>{error}</div>
            <button onClick={processLogin} type="Submit">Register</button>
                  
            <br/>
            <Link to="/login" className="btn btn-primary">Already Registered?</Link>
            </div>
            </form>
           
            </Col>
            <Col md={5}>
                   <img src={register} alt="register" style={{width: '100%', height: '100%'}} />
             </Col>
        </Row>
        </Container>
        </div>
    );
};

export default Register;