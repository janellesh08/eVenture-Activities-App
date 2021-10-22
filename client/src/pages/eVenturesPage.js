
import { Container } from "react-bootstrap"
import { connect } from "react-redux"
import { useEffect } from "react"
import * as actionCreator from '../store/creators/actionCreators'
import EventuresList from "../components/eVenturesList"
import '../styles/eVenturesPage.css'
import React from "react"


function EventuresPage(props) {

    useEffect(() => {
        props.onFetchActivities()
    }, [])


    return (
        <div>
            <Container className='activityContainer'>
                <h1>Find an Activity!</h1>

                <EventuresList />

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
        onFetchActivities: () => dispatch(actionCreator.fetchAllActivities()),
        onAddToMyActivities: (myActivity) => dispatch(actionCreator.submitToMyActivities(myActivity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventuresPage)