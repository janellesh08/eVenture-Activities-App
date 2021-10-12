import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink } from 'react-router-dom'

function Menu(){

    return(

<div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">eVentures</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/home" className="nav-link" >Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
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
