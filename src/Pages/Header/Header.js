import React from 'react';
import { Container,Nav, Navbar,Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../hooks/useAuth';
import './Header.css';


const Header = () => {
  const {user,logOut} = useAuth();
    return (
        <div>
          <Navbar bg="light" expand="lg">
  <Container fluid className="area-details">
    <Navbar.Brand><img src={logo} alt="logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-4 my-lg-0 nav-area"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink as={Link} to="/home" className="nav-area">Home</NavLink>
        <NavLink as={Link} to="/servicepage" className="nav-area">Services</NavLink>
        <NavLink as={Link}  to="/aboutus" className="nav-area">About Us</NavLink>
        <NavLink as={Link} to="/ourclinic" className="nav-area">Our Clinic</NavLink>
        <NavLink as={Link} to="/dentalteam" className="nav-area">Dental Team</NavLink>
        <NavLink as={Link} to="/register" className="nav-area">Register</NavLink>
        {
          user?.email ?
          <NavLink to="/home" onClick={logOut} className="nav-area">Logout</NavLink>:
          <NavLink to="/login" className="nav-area">login</NavLink>
        }
       
        <Navbar.Text>
          {user?.displayName}
         </Navbar.Text>
         
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;