
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

export const submitToMyActivities = (myActivity) => {

   
    return async (dispatch) => {
        console.log(myActivity)
        fetch('http://localhost:8080/api/add-my-eventure', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                activityId: myActivity.id,
                userId: localStorage.getItem('userId'),
                activityTitle: myActivity.activity
            })
        }).then(response => response.json())
            .then(result => {
                
            dispatch({
                type: actionType.FETCH_MY_ACTIVITIES,
                payload: myActivity
            })
            })
        
    }
}

