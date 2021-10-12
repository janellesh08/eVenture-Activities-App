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
                    <NavLink to="/Login" className="nav-link">Login</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/my-eventures" className="nav-link">My eVentures</NavLink>
                        <NavLink to="/add-new-eventure" className="nav-link">Add New eVenture</NavLink>
                        <NavLink to="#logout" className="nav-link">Logout</NavLink>
                        <NavLink to="/SignUp" className="nav-link">Sign Up</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;