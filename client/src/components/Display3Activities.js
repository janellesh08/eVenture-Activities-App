import { Navbar, Nav, Container, Row, Col, CardGroup, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


function Display3Activities(){
    const [soloActivity, setSoloActivity]= useState({})
    const [couplesActivity, setCouplesActivity]= useState({})
    const [friendsActivity, setFriendsActivity]= useState({})

    useEffect(() => {
        activityItemSolo()
        activityItemCouple()
        activityItemFriends()
    }, [])


const activityItemSolo = () => {
    fetch('http://localhost:8080/api/activities/Solo')
    .then(response => { return response.json()})
    .then(soloActivity => {
        setSoloActivity(soloActivity)
    })
}

const activityItemCouple = () => {
    fetch('http://localhost:8080/api/activities/Couple')
    .then(response => { return response.json()})
    .then(couplesActivity => {
        setCouplesActivity(couplesActivity)
    })
}

const activityItemFriends = () => {
    fetch('http://localhost:8080/api/activities/Friends')
    .then(response => { return response.json()})
    .then(friendsActivity => {
        setFriendsActivity(friendsActivity)
    })
}



   return( <div>
            <Container>
                <Row>
                    <Col  fluid> <h1 id="welcomeText">Welcome!</h1></Col>
                </Row>
                
                
                <CardGroup id="cardGroup">
                    <Card>
                        <Card.Img variant="top" src="/images/2.png" />
                        <Card.Body>
                            <Card.Title>{soloActivity.activity}</Card.Title>
                            <Card.Text>
                                {soloActivity.description}
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Try a solo eVenture!</small>
                        </Card.Footer> */}
                    </Card>
                    
                    
                    <Card>
                        <Card.Img variant="top" src="/images/3.png" />
                        <Card.Body>
                            <Card.Title>{couplesActivity.activity}</Card.Title>
                            <Card.Text>
                                {couplesActivity.description}
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">This eVenture was made for couples!</small>
                        </Card.Footer> */}
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/murdermystery.png" />
                        <Card.Body>
                            <Card.Title>{friendsActivity.activity}</Card.Title>
                            <Card.Text>
                                {friendsActivity.description}
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">eVentures with friends are always special!</small>
                        </Card.Footer> */}
                    </Card>
                </CardGroup>
            </Container>

        </div>
   )
}

export default Display3Activities;