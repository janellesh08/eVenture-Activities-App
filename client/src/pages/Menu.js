import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../styles/app.css'


function Menu(){

    return(

<div>
            <Navbar bg="light" variant="light">
                <Container>
                    <img id="menu-logo" src="/images/logo.png" alt="image" />
                    {/* <Navbar.Brand href="#home">eVentures</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <NavLink to="/SignUp" className="nav-link">Sign Up</NavLink>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/all-eventures" className="nav-link">eVentures</NavLink>
                        <NavLink to="/my-eventures" className="nav-link">My eVentures</NavLink>
                        <NavLink to="/add-new-eventure" className="nav-link">Add New eVenture</NavLink>
                        <NavLink to="#logout" className="nav-link">Logout</NavLink>  
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;
