import { Navbar, Nav, Container, Card, Button, Row, Col, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../styles/app.css'

function Footer() {
    return (

        <Card id="footerCard" className="text-center">
            <Card.Header>Let's Connect!</Card.Header>
            <Card.Body id="cardBody">
                <h5>Meet the Devs</h5>
                <h7 id="h7">Click the icons to learn more about us.</h7>
                <Container id="contributors">
                    <Row id="iconContainer">
                        <Col class="iconDiv" xs={6} md={4}>
                           <a href="https://www.janelleshines.me/" target='_blank' > <Image  class="icon-img" src="/images/groupFaces/1.png" thumbnail /></a>
                        
                        
                           <a href="https://github.com/Kharharee" target='_blank' > <Image  class="icon-img" src="/images/groupFaces/2.png" thumbnail /></a>
                        
                        
                           <a href="https://www.david-burrell.me/" target='_blank' > <Image  class="icon-img" src="/images/groupFaces/3.png" thumbnail /></a>
                        
                        
                           <a href="https://jenniferdeyoung.dev/" target='_blank' > <Image  class="icon-img" src="/images/groupFaces/4.png" thumbnail /></a>
                        
                        
                           <a href=" https://www.jenifer-ine.me/" target='_blank' > <Image  class="icon-img" src="/images/groupFaces/5.png" thumbnail /></a>
                        </Col>
                        
                    </Row>
                </Container>
            </Card.Body>
            <Card.Footer className="text-muted">eVentures 2021</Card.Footer>
        </Card>
    )
}

export default Footer;