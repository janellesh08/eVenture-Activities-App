import {Container, Card, Row, Col, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import '../styles/app.css'

function Footer() {
    return (

        <Card id="footerCard" className="text-center">
            <Card.Header>Let's Connect!</Card.Header>
            <Card.Body id="cardBody">
                <h5>Meet the Devs</h5>
                <p id="h7">Click the icons to learn more about us.</p>
                <Container id="contributors">
                    <Row id="iconContainer">
                        <Col className="iconDiv" xs={6} md={4}>
                           <a href="https://www.janelleshines.me/" target='_blank' > <Image  className="icon-img" src="/images/groupFaces/1.png" thumbnail /></a>
                        
                        
                           <a href="https://github.com/Kharharee" target='_blank' > <Image  className="icon-img" src="/images/groupFaces/2.png" thumbnail /></a>
                        
                        
                           <a href="https://www.david-burrell.me/" target='_blank' > <Image  className="icon-img" src="/images/groupFaces/3.png" thumbnail /></a>
                        
                        
                           <a href="https://jenniferdeyoung.dev/" target='_blank' > <Image  className="icon-img" src="/images/groupFaces/4.png" thumbnail /></a>
                        
                        
                           <a href=" https://www.jenifer-ine.me/" target='_blank' > <Image  className="icon-img" src="/images/groupFaces/5.png" thumbnail /></a>
                        </Col>
                        
                    </Row>
                </Container>
            </Card.Body>
            <Card.Footer className="text-muted">eVentures 2021</Card.Footer>
        </Card>
    )
}

export default Footer;