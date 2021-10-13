import * as actionType from '../actions/actionTypes'

const initialState = {
    activities: []
}

const fetchActivitiesReducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.FETCH_ALL_ACTIVITIES:
            return{
                ...state,
                activities: action.payload
            }

        default:
            return state
    }
}

export default fetchActivitiesReducer