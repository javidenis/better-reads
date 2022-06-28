import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EditReviewForm from '../edit-review-form/edit-review-form'

function SingleReviewDisplay({ review }) {
    const sessionUser = useSelector(state => state.session.user)
    const [reviewFormOpen, setReviewFormOpen] = useState(false)


    return (
        <div>
            <div>{review.rating}</div>
            <div>{review.content}</div>
            {sessionUser && sessionUser.id === review.user_id && <button onClick={() => setReviewFormOpen(!reviewFormOpen)}>Edit Review</button>}
            {reviewFormOpen && <EditReviewForm setReviewFormOpen={setReviewFormOpen} review={review} />}
        </div>
    )
}

export default SingleReviewDisplay
