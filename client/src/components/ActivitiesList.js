import { Container } from "react-bootstrap"
import { connect } from "react-redux"


function ActivitiesList(props) {

    

    return (
        <div>
            <Container>
                <h4>Filter</h4>

            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        activites: state.fetchActivityRed.activities
    }
}

export default connect(mapStateToProps)(ActivitiesList)