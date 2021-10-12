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
                <Card.Title>Find us on social media</Card.Title>
                <Container>
                    <Row id="socialIconContainer">
                        <Col class="iconDiv" xs={6} md={4}>
                            <Image  class="icon-img" src="/images/facebook-plain.svg" thumbnail />
                        </Col>
                        <Col class="iconDiv" xs={6} md={4}>
                            <Image class="icon-img" src="/images/instagram.jpeg" thumbnail />
                        </Col>
                        <Col class="iconDiv" xs={6} md={4}>
                            <Image class="icon-img" src="/images/twitter-original.svg" thumbnail />
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            <Card.Footer className="text-muted">eVentures 2021</Card.Footer>
        </Card>
    )
}

export default Footer;