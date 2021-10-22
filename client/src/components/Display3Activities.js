import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap'
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
    fetch('https://eventures-app.herokuapp.com/api/activities/Solo')
    .then(response => { return response.json()})
    .then(soloActivity => {
        setSoloActivity(soloActivity)
    })
}

const activityItemCouple = () => {
    fetch('https://eventures-app.herokuapp.com/api/activities/Couple')
    .then(response => { return response.json()})
    .then(couplesActivity => {
        setCouplesActivity(couplesActivity)
    })
}

const activityItemFriends = () => {
    fetch('https://eventures-app.herokuapp.com/api/activities/Friends')
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
                        <Card.Img variant="top" src="/images/magic.png" />
                        <Card.Body>
                            <Card.Title>Magic</Card.Title>
                            <Card.Text>
                            Search YouTube to learn how to do a magic trick with a deck of cards.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    
                    <Card>
                        <Card.Img variant="top" src="/images/3.png" />
                        <Card.Body>
                            <Card.Title>Book Scavenger Hunt</Card.Title>
                            <Card.Text>
                            Go to your local library. Create a list of clues/ parameters for each book you want your significant other to find.  Trade clue sheets and see who can find all the books first.  
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/murdermystery.png" />
                        <Card.Body>
                            <Card.Title>Murder Mystery Party</Card.Title>
                            <Card.Text>
                            Host a murder mystery party. Create an array of characters for your guest and solve the unsolved crimes.
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
