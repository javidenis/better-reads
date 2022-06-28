const ADD_READSTATUS = '/readstatus/add'
const GET_READSTATUS = '/readstatus/get'

const actionAddReadStatus = readStatus => {
    return {
        type: ADD_READSTATUS,
        readStatus
    }
}

const actionGetReadStatus = readStatus => {
    return {
        type: GET_READSTATUS,
        readStatus
    }
}

export const getReadStatusThunk = () => async dispatch => {
    const response = await fetch('/api/readstatus')
    const data = await response.json()
    if (response.ok) {
        await dispatch(actionGetReadStatus(data))
    }
}

export const addReadStatusThunk = newReadStatus => async dispatch => {
    const {
        user_id,
        book_id,
        readStatus
    } = newReadStatus

    const formData = new FormData()
    formData.append('user_id', user_id)
    formData.append('book_id', book_id)
    formData.append('readStatus', readStatus)

    const response = await fetch('/api/readstatus',
        {
            method: 'POST',
            body: formData
        }
    )

    const data = await response.json()
    if (response.ok) {
        await dispatch(actionAddReadStatus(data))
    }
}

const readStatusReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_READSTATUS:
            let newAddState = {}
            newAddState = { ...state, [action.readStatus.id]: action.readStatus }
            return newAddState
        case GET_READSTATUS:
            let newState = { ...state };
            action.readStatus.readStatus.forEach((readstatus) => {
                newState[readstatus.id] = readstatus;
            });
            return newState;
        default:
            return state
    }
}

export default readStatusReducer