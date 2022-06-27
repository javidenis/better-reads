const ADD_REVIEW = '/review/add'

const actionAddReview = review => {
    return {
        type: ADD_REVIEW,
        review
    }
}


export const addReviewThunk = newReview => async dispatch => {
    console.log(newReview)
    const {
        content,
        user_id,
        book_id,
        rating
    } = newReview

    const formData = new FormData()
    formData.append('content', content)
    formData.append('user_id', user_id)
    formData.append('book_id', book_id)
    formData.append('rating', rating)


    const response = await fetch('/api/reviews', {
        method: "POST",
        body: formData
    }
    )

    const data = await response.json()
    if (response.ok) {
        dispatch(actionAddReview(data))
        return null
    } else if (response.status < 500) {
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}

const reviewReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            let newAddState = {}
            newAddState = { ...state, [action.review.id]: action.review }
            return newAddState
        default:
            return state
    }
}

export default reviewReducer
