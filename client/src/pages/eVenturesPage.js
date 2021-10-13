import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { connect } from "react-redux"
import * as actionCreator from '../store/creators/actionCreators'
import EventuresList from "../components/eVenturesList"


function EventuresPage(props) {

    useEffect(() => {
        props.onFetchActivities()
    }, [])

    return (
        <div>
            <Container>
                <h1>Find an Activity!</h1>

                <EventuresList />
            </Container>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        onFetchActivities: () => dispatch(actionCreator.fetchAllActivities())
    }
}

export default connect(null, mapDispatchToProps)(EventuresPage)