const initialState = {
    currentUser: null,
};


const userReducer = (state = initialState, action) => {
    if (action.type === "user/login") {
        return { ...state, currentUser: action.payload};
    }
    if (action.type === "user/logout") {
        return { ...state, currentUser: null };
    }

    return state;
};

export default userReducer