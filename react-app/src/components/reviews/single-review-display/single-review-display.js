import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import EditReviewForm from '../edit-review-form/edit-review-form'
import './single-review-display.css'
import { Rating } from 'react-simple-star-rating'

function SingleReviewDisplay({ reviewId }) {
    const sessionUser = useSelector(state => state.session.user)
    const review = useSelector(state =>state.reviews[reviewId])
    const [reviewFormOpen, setReviewFormOpen] = useState(false)
    const [moreOrLess, setMoreOrLess] = useState('...more')
    const [reviewContent, setReviewContent] = useState(review?.content.slice(0, 501) || '')
    const reviewUser = useSelector(state => state.users[review?.user_id])

    useEffect(()=> {

        setReviewContent(review?.content.slice(0, 501))
    }, [review, setReviewContent])


    const handleDescriptionExpand = () => {
        if (moreOrLess === '...more') {
            setReviewContent(review?.content)
            setMoreOrLess('(less)')
        } else {
            setReviewContent(review?.content.slice(0, 501))
            setMoreOrLess('...more')
        }
    }

    const handleError = (e) => {
        e.target.src = ''
        e.target.src = reviewUser?.picture_url
    }

    return (
        <div id='single-review-full-container'>
            <img id='single-review-profile-pic' onError={e => handleError(e)} alt='profile' src={reviewUser?.picture_url || 'https://www.hrlact.org/wp-content/uploads/2020/12/generic-user-icon.jpg'}></img>
            <div id='single-review-content'>
                {/* <p>{reviewUser?.name} rated it {review?.rating} / 5</p> */}
                <p>{reviewUser?.name} rated it <Rating size={20} readonly ratingValue={review?.rating * 20}/></p>
                <div>{reviewContent}</div>
                {review?.content.length > 501 && <p id='single-book-expand-description' onClick={() => handleDescriptionExpand()}>{moreOrLess}</p>}

                {sessionUser && sessionUser?.id === review?.user_id && <button onClick={() => setReviewFormOpen(!reviewFormOpen)}>Edit Review</button>}
                {reviewFormOpen && <EditReviewForm setReviewFormOpen={setReviewFormOpen} review={review} />}
            </div>
        </div>
    )
}

export default SingleReviewDisplay
