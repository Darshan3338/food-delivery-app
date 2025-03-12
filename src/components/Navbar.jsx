import React from 'react';
import {Link} from 'react-router-dom'
import {Container,Nav,Navbar} from "react-bootstrap"
import './Navbar.css'

const NavigationBar = () =>{
    return(
        <Navbar style={{backgroundColor:"red"}} variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">
                Food Delivery App
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className="nav-link">Register</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavigationBar;
