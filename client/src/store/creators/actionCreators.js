import * as actionType from '../actions/actionTypes'

export const fetchAllActivities = () => {
    return async (dispatch) => {
        let response = await fetch('http://localhost:8080/api/activities')
        let activities = await response.json()
        console.log(activities)
        dispatch({
            type: actionType.FETCH_ALL_ACTIVITIES,
            payload: activities
        })
    }
}

export const submitToMyActivities = (activity) => {
    return {
        type: actionType.FETCH_MY_ACTIVITIES,
        payload: activity
    }
}