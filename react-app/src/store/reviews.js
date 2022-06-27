const ADD_REVIEW = '/review/add'
const GET_REVIEW = '/review/getAll'
const DELETE_REVIEW = '/review/delete'

const actionAddReview = review => {
    return {
        type: ADD_REVIEW,
        review
    }
}

const actionDeleteReview = reviewId => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

const actionAllReviews = reviews => {
    return {
        type: GET_REVIEW,
        reviews
    }
}

export const deleteReviewThunk = reviewId => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`,
        {
            method: "DELETE",
        }
    )
    if (response.ok) {
        dispatch(actionDeleteReview(reviewId))
    }
}

export const editReviewThunk = review => async dispatch => {

    const {
        content,
        user_id,
        book_id,
        rating,
        reviewId
    } = review

    const formData = new FormData()
    formData.append('content', content)
    formData.append('user_id', user_id)
    formData.append('book_id', book_id)
    formData.append('rating', rating)
    formData.append('review_id', reviewId)

    const response = await fetch('/api/reviews',
        {
            method: "PUT",
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

export const getReviewsThunk = () => async dispatch => {
    const response = await fetch('/api/reviews')
    const data = await response.json()
    if (response.ok) {
        dispatch(actionAllReviews(data))
    }
}

export const addReviewThunk = newReview => async dispatch => {
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
        case GET_REVIEW:
            let newState = { ...state };
            action.reviews.reviews.forEach((review) => {
                newState[review.id] = review;
            });
            return newState;
        case DELETE_REVIEW:
            let newDeleteState = { ...state };
            delete newDeleteState[action.reviewId]
            return newDeleteState
        default:
            return state
    }
}

export default reviewReducer
