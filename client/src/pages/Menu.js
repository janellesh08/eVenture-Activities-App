import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../styles/app.css'
import { connect } from 'react-redux'



function Menu(props) {

    return (

        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container id="navBarContainer">
                <NavLink id="logoNavLink" to="/" className="nav-link"> <img id="menu-logo" src="/images/logo.png" alt="image" /></NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            { props.isAuthenticated ? null :<div><NavLink to="/Login" className="nav-link">Login</NavLink></div> }
                            <div><NavLink to="/about" className="nav-link">About</NavLink></div>
                           { props.isAuthenticated ? <div><NavLink to="/all-eventures" className="nav-link">eVentures</NavLink></div> : null}
                           { props.isAuthenticated ? <div><NavLink to="/my-eventures" className="nav-link">My eVentures</NavLink></div> : null}
                            {props.isAuthenticated ? null :<div><NavLink to="/SignUp" className="nav-link">Sign Up</NavLink></div>}
                           {props.isAuthenticated ? <div><NavLink to="#logout" className="nav-link">Logout</NavLink></div> : null }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(Menu);
