import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import login from '../../images/login.png';
import useAuth from '../hooks/useAuth';
import { Link} from 'react-router-dom';
import "./Login.css";



const Login = () => {
    const{ signInUsingGoogle, user}  = useAuth();
   
    return (
        <div className="">
        <div className="heading-area">
            <h1>Login To your Account</h1>
            <h3> Welcome to your account: { user?.email }</h3>
            </div>
           <Container className=" container">
             <Row>
            <Col md={7}>
            <div className="inputs">
                <input type="email" className="form-control" placeholder="email" />
                <input type="password" className="form-control" placeholder="Password"/>
                <input type="Submit" value="Log In"/>
            </div>
            
                <button onClick={signInUsingGoogle}>Google Login</button>
                <br/>
                <Link className="btn btn-primary"to="/register">New User?</Link>

          
            </Col>
            <Col md={5}>
                <img src={login} alt="login" style={{width: '100%', height: '100%'}}/>
            </Col>
            </Row>
            </Container> 
            
        </div>
    );
};

export default Login;