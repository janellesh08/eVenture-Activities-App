import { Col, Container, Form, Row } from "react-bootstrap"
import { connect } from "react-redux"


function EventuresList(props) {



    return (
        <div>
            <Container className='filterMenu'>
                <h4>Filter</h4>
                <Row>
                    <Col>
                        <Form.Label column lg={2}>Type</Form.Label>

                        <Form.Select>
                            <option> - </option>
                            <option>Food</option>
                            <option>Relaxation</option>
                            <option>Music</option>
                            <option>Education</option>
                            <option>DIY/Arts and Crafts</option>
                            <option>Social</option>
                            <option>Charity</option>
                            <option>Organization</option>
                            <option>Fitness</option>
                            <option>Skill</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label column lg={2}>Price</Form.Label>

                        <Form.Select>
                            <option> - </option>
                            <option>Free</option>
                            <option>$</option>
                            <option>$$</option>
                            <option>$$$</option>
                            <option>$$$$</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label column lg={2}>When</Form.Label>

                        <Form.Select>
                            <option> - </option>
                            <option>Anytime</option>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>

                        </Form.Select>

                    </Col>
                    <Col>
                        <Form.Label column lg={2}>Location</Form.Label>

                        <Form.Select>
                            <option> - </option>
                            <option>At Home</option>
                            <option>Outside of the Home</option>

                        </Form.Select>

                    </Col>
                    <Col>
                        <Form.Label column lg={2}>Participants</Form.Label>

                        <Form.Select>
                            <option> - </option>
                            <option>Solo</option>
                            <option>Couples</option>
                            <option>Friends</option>
                            <option>Family</option>

                        </Form.Select>

                    </Col>
                    <Col>
                        <Form.Label column lg={2}>Duration</Form.Label>

                        <Form.Select>
                            <option> - </option>
                            <option>0 - 30 mins</option>
                            <option>30 mins - 1hr</option>
                            <option>1hr - 2hrs</option>
                            <option>2hrs - 4hrs</option>
                            <option>4hrs +</option>

                        </Form.Select>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        activites: state.fetchActivityRed.activities
    }
}

export default connect(mapStateToProps)(EventuresList)