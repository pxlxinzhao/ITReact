const initialState = {
    user: {}
}

const reducer = (state = initialState, action) => {
    if (action.type === 'LOAD_USER'){
        return {
            ...state,
            users: action.users
        }
    }

    return state;
};

export default reducer;