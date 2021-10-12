const initialState = {
    isAuthenticated: false
}

function reducer(state = initialState, action) {
    if (action.type == 'ON_LOGIN') {
        return {
            ...state,
            isAuthenticated: true
        }
    }

}

export default reducer;
