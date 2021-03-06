import * as actionType from '../actions/actionTypes'

const initialState = {
    activities: [],
    myActivities: [],
    activity: {}
}

const fetchActivitiesReducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.FETCH_ALL_ACTIVITIES:
            return{
                ...state,
                activities: action.payload
            }

        case actionType.FETCH_MY_ACTIVITIES:
            return{
                ...state,
                myActivities: state.myActivities.concat(action.payload)
            }

        case 'MY_JOURNAL_ENTRIES_LOADED':
            return {
                ...state,
                activity: action.payload
            }
        
        case 'All_JOURNAL_ENTRIES_LOADED':
            return {
                ...state,
                activity: action.payload
            }
            
        default:
            return state
    }
}

export default fetchActivitiesReducer