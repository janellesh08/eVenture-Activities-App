
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import Menu from "./Menu";
import Footer from './Footer';

function BaseLayout (props) {

    return (
        <>
            <Menu/>
            {props.children}
            <Footer/>
            

        </>   
    )
}

export default BaseLayout;