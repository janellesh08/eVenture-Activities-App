import { Container, Form } from "react-bootstrap"
import { connect } from "react-redux"


function EventuresList(props) {

    

    return (
        <div>
            <Container>
                <h4>Filter</h4>
                <div>
                    <label></label>
                </div>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        activites: state.fetchActivityRed.activities
    }
}

export default connect(mapStateToProps)(EventuresList)