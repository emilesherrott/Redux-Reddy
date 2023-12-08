export const addBiscuit = () => {
    return (dispatch) => {
        dispatch({
            type: "add"
        })
    }
}

export const removeBiscuit = () => {
    return (dispatch) => {
        dispatch({
            type: "remove"
        })
    }
}