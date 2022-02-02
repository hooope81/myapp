

const initialState = {
    showName: true,
    name: "Nadin"
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'EXAMLE_ACTION':
            return {
                ...state,
                showName: !state.showName
            };
        default:
            return state;
    }
};
export default profileReducer;