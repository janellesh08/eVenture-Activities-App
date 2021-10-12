import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { connect } from "react-redux"
import ActivitiesList from "../components/ActivitiesList"
import * as actionCreator from '../store/creators/actionCreators'


function ActivitesPage(props) {

    useEffect(() => {
        props.onFetchActivities()
    }, [])

    return (
        <div>
            <Container>
                <h1>Find an Activity!</h1>

                <ActivitiesList />
            </Container>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
        onFetchActivities: () => dispatch(actionCreator.fetchAllActivities())
    }
}

export default connect(null, mapDispatchToProps)(ActivitesPage)