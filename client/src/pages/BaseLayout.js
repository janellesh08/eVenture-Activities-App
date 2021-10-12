import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavLink } from 'react-router-dom'

import Menu from "./Menu";

function BaseLayout (props) {

    return (
        <>
            <Menu/>
            {props.children}

        </>   
    )
}

export default BaseLayout;