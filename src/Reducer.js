export const initialState = {
    basket: [],
}

function reducer(state, action) {
    console.log(action)
    switch(action.type) {
        case "ADD_TO_BASKET":
            // Logic
            return {
                ...state,
                basket: [...state.basket, action.item ]
            }
            break;
        case "REMOVE_FROM _BASKET":
            // Logic
            return {state}
            break;
        default:
            return state;
    }
}

export default reducer;
