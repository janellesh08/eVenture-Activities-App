import { Container } from "react-bootstrap"
import { connect } from "react-redux"
import ActivitiesList from "../components/ActivitiesList"


function ActivitesPage(props) {

    return (
        <div>
            <Container>
                <h1>Find an Activity!</h1>

                <ActivitiesList />
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitesPage)