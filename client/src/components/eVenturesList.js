import { useState } from "react"
import { Col, Container, Form, Row, Button, Card} from "react-bootstrap"
import { connect } from "react-redux"
import * as actionCreators from  '../store/creators/actionCreators'
import { priceIcon, participantIcon, timeOfDayIcon, durationIcon, locationIcon } from '../components/Icon'
import TwistModal from "./TwistModal"
import '../styles/eVenturesPage.css'



function EventuresList(props) {
    
    const [activityItems = (props.activities.map((activity) => {

        return <li className = 'eVenturesList' key={activity.id}>
         
            <Card border="secondary" >
                <Card.Header className = 'activityCardHeader'>{priceIcon(activity.price_range)}{participantIcon(activity.participants)}{timeOfDayIcon(activity.time_of_day)}{durationIcon(activity.duration_range)}{locationIcon(activity.location)}</Card.Header>
                <Card.Body>
                    <Card.Title>{activity.activity}</Card.Title>
                    <Card.Text>
                        {activity.description}
                    </Card.Text>
                    <Container fluid className = 'buttonDiv'>
                    <Button variant = 'primary' className="eventureBtn" onClick={() => handleAddMyActivity(activity)}>Add to My eVentures</Button>{' '}
                    </Container >
                    <TwistModal/>
                </Card.Body>
            </Card>
            <br />
        </li>
    })), setActivityItems] = useState()
    const [filter, setFilter] = useState({})

    
    function handleAddMyActivity (activity) {

        alert("Your eVenture has been added!")
        props.onAddToMyActivities(activity)
        
    }


    const handleFilterOption = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        })
    }

    const handleApplyFilter = () => {

        let filteredActivities = props.activities.filter((item) => {
            for (var key in filter) {
                if (item[key] === undefined || item[key] !== filter[key]) {
                    return false
                }
            }
            return true
        })

        console.log(filteredActivities)
        
        setActivityItems(filteredActivities.map((activity) => {
            return <li className = 'eVenturesList' key={activity.id}>
         
            <Card border="secondary" style={{ width: '25rem' }}>
                <Card.Header className = 'activityCardHeader'>{priceIcon(activity.price_range)}{participantIcon(activity.participants)}{timeOfDayIcon(activity.time_of_day)}{durationIcon(activity.duration_range)}{locationIcon(activity.location)}</Card.Header>
                <Card.Body>
                    <Card.Title>{activity.activity}</Card.Title>
                    <Card.Text>
                        {activity.description}
                    </Card.Text>
                    <Container fluid className = 'buttonDiv'>
                    <Button variant = 'primary'  className="eventureBtn" onClick={() => handleAddMyActivity(activity)}>Add to My eVentures</Button>{' '}
                    </Container >
                    <TwistModal/>
                </Card.Body>
            </Card>
            <br />
        </li>
        })
        )
    }

    

    const handleResetFilter = () => {
        clearDropdowns()
        setFilter({})
        setActivityItems(props.activities.map((activity) => {

            return <li className = 'eVenturesList' key={activity.id}>
             
                <Card border="secondary" style={{ width: '25rem' }}>
                    <Card.Header className = 'activityCardHeader'>{priceIcon(activity.price_range)}{participantIcon(activity.participants)}{timeOfDayIcon(activity.time_of_day)}{durationIcon(activity.duration_range)}{locationIcon(activity.location)}</Card.Header>
                    <Card.Body>
                        <Card.Title className = 'cardTitle'>{activity.activity}</Card.Title>
                        <Card.Text>
                            {activity.description}
                        </Card.Text>
                        <Container fluid className = 'buttonDiv'>
                        <Button variant = 'primary'  className="eventureBtn" onClick={() => handleAddMyActivity(activity)}>Add to My eVentures</Button>{' '}
                        </Container >
                        <TwistModal/>
                    </Card.Body>
                </Card>
                <br />
            </li>
        }))
    }

    const clearDropdowns = () => {
        document.getElementById('type').value = ''
        document.getElementById('price_range').value = ''
        document.getElementById('time_of_day').value = ''
        document.getElementById('location').value = ''
        document.getElementById('participants').value = ''
        document.getElementById('duration_range').value = ''
        
    }

    return (
        <div>
            <Container flex className='filterMenu'>
                <h4>Filter</h4>
                <Row className='filterDropdown'>
                    <Col>
                    
                        <Form.Label column lg={2}>Type</Form.Label>

                        <Form.Select name='type' id='type' onChange={handleFilterOption}>
                            <option></option>
                            <option>Food</option>
                            <option>Relaxation</option>
                            <option>Music</option>
                            <option>Education</option>
                            <option>DIY/ Arts & Crafts</option>
                            <option>Social</option>
                            <option>Charity</option>
                            <option>Organization</option>
                            <option>Fitness</option>
                            <option>Skill</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label column lg={2}>Price</Form.Label>

                        <Form.Select name='price_range' id='price_range' onChange={handleFilterOption}>
                            <option></option>
                            <option>Free</option>
                            <option>$</option>
                            <option>$$</option>
                            <option>$$$</option>
                            <option>$$$$</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label column lg={2}>When</Form.Label>

                        <Form.Select name='time_of_day' id='time_of_day' onChange={handleFilterOption}>
                            <option></option>
                            <option>Anytime</option>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>

                        </Form.Select>

                    </Col>
                    <Col>
                        <Form.Label column lg={2}>Location</Form.Label>

                        <Form.Select name='location' id='location' onChange={handleFilterOption}>
                            <option></option>
                            <option>At Home</option>
                            <option>Outside of the Home</option>

                        </Form.Select>

                    </Col>
                    <Col>
                        <Form.Label column lg={2}>Participants</Form.Label>

                        <Form.Select name='participants' id='participants' onChange={handleFilterOption}>
                            <option></option>
                            <option>Solo</option>
                            <option>Couple</option>
                            <option>Friends</option>
                            <option>Family</option>

                        </Form.Select>

                    </Col>
                    <Col>
                        <Form.Label column lg={2}>Duration</Form.Label>

                        <Form.Select name='duration_range' id='duration_range' onChange={handleFilterOption}>
                            <option></option>
                            <option>0 - 30 mins</option>
                            <option>30 mins - 1hr</option>
                            <option>1hr - 2hrs</option>
                            <option>2hrs - 4hrs</option>
                            <option>4hrs +</option>

                        </Form.Select>

                    </Col>
                </Row>
                <Row>
                    <Container flex className = 'filterBtns'>
                    <Col className='text-center mt-3'>
                    <Button variant = 'primary'  className ='filterBtn' onClick={handleApplyFilter} >Apply Filter</Button>
                    </Col>
                    <Col className='text-center mt-3'>
                    <Button  variant = 'primary'  className ='filterBtn'  onClick={handleResetFilter} >Reset Filter</Button>
                    </Col>
                    </Container>
                </Row>

            </Container>
            <Container className='activitiesUL'>
                <ul>
                    {activityItems}
                </ul>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        activities: state.fetchActivityRed.activities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToMyActivities: (myActivity) => dispatch(actionCreators.submitToMyActivities(myActivity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventuresList)