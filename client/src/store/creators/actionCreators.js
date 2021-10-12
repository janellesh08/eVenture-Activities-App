import * as actionType from '../actions/actionTypes'

export const fetchAllActivities = () => {
    return async (dispatch) => {
        let response = await fetch('http://localhost:8080/api/activities')
        let activities = await response.json()
        dispatch({
            type: actionType.FETCH_ALL_ACTIVITIES,
            payload: activities
        })
    }
}