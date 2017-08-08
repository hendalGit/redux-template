const defaultReducer = (state = {
    variable1: "variable1",
    variable2: 2
}, action) => {
    switch (action.type) {
        case "ACTION1":
            state = {
                ...state,
                variable1: action.payload
            };
            break;
        case "ACTION2":
            state = {
                ...state,
                variable2: action.payload
            };
            break;
    }
    return state;
};

export default defaultReducer;