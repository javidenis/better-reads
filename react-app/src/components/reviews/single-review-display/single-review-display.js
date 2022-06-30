import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import EditReviewForm from '../edit-review-form/edit-review-form'
import './single-review-display.css'

function SingleReviewDisplay({ reviewId }) {
    const sessionUser = useSelector(state => state.session.user)
    const review = useSelector(state =>state.reviews[reviewId])
    const [reviewFormOpen, setReviewFormOpen] = useState(false)
    const [moreOrLess, setMoreOrLess] = useState('...more')
    const [reviewContent, setReviewContent] = useState(review.content.slice(0, 501) || '')

    useEffect(()=> {
        setReviewContent(review.content.slice(0, 501))
    }, [review, setReviewContent])


    const handleDescriptionExpand = () => {
        if (moreOrLess === '...more') {
            setReviewContent(review.content)
            setMoreOrLess('(less)')
        } else {
            setReviewContent(review.content.slice(0, 501))
            setMoreOrLess('...more')
        }
    }

    return (
        <div id='single-review-full-container'>
            <img id='single-review-profile-pic' alt='profile' src={sessionUser.picture_url}></img>
            <div id='single-review-content'>
                <p>{sessionUser.name} rated it {review.rating} / 5</p>
                <div>{reviewContent}</div>
                {review.content.length > 501 && <p id='single-book-expand-description' onClick={() => handleDescriptionExpand()}>{moreOrLess}</p>}

                {sessionUser && sessionUser.id === review.user_id && <button onClick={() => setReviewFormOpen(!reviewFormOpen)}>Edit Review</button>}
                {reviewFormOpen && <EditReviewForm setReviewFormOpen={setReviewFormOpen} review={review} />}
            </div>
        </div>
    )
}

export default SingleReviewDisplay
