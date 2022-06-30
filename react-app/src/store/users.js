const GET_USERS = '/users/all'

const actionAllUsers = users => {
    return {
        type: GET_USERS,
        users
    }
}

export const getAllUsersThunk =  () => async dispatch => {
    const response = await fetch("/api/users/");
    const responseData = await response.json();
    console.log(responseData)
    if (response.ok) {
        dispatch(actionAllUsers(responseData.users))
    }
}


const usersReducer = (state = {}, action) => {
    switch (action.type){
        case GET_USERS:
            let newGetState = {}
            console.log(action.users)
            action.users.forEach(user => newGetState[user.id] = user)
            return newGetState
        default:
            return state
    }
}

export default usersReducer
