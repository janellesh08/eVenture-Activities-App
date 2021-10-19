import * as actionType from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false
}

function AuthenticatedReducer(state = initialState, action) {
    switch(action.type){
        case actionType.ON_LOGIN:
            return{
                ...state,
                isAuthenticated: true
            }
        case actionType.ON_LOGOUT:
            return{
                ...state,
                isAuthenticated: action.payload
            }

        default:
            return state
    }

}

export default AuthenticatedReducer;
