import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editReviewThunk, deleteReviewThunk } from '../../../store/reviews';
import { useParams } from 'react-router-dom';

function EditReviewForm({ setReviewFormOpen, review }) {
    const bookId = useParams().id
    const thisBook = useSelector(state => state.books)[bookId]
    const book_id = thisBook.id
    const sessionUser = useSelector(state => state.session.user)
    const [rating, setRating] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch()

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const newReview = {
            content,
            user_id: sessionUser.id,
            rating: Number(rating),
            book_id,
            reviewId: review.id

        }

        const data = await dispatch(editReviewThunk(newReview))
        if (data) {
            setErrors(data)
        } else {
            setReviewFormOpen(false)
        }
    }


    const handleSetRating = e => {
        if (e.target.value > 0 && e.target.value <= 5) {
            setRating(e.target.value)
        } else {
            setRating('')
        }
    }

    const handleCancel = e => {
        setReviewFormOpen(false)
    }

    const handleDelete = async e => {
        e.preventDefault()
        await dispatch(deleteReviewThunk(review.id))
    }

    return (

        <form
            id='review-form'
            onSubmit={e => handleOnSubmit(e)}
        >
            {errors.length > 0 &&
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            }
            <label>Rating: 1 to 5</label>
            <input onChange={e => handleSetRating(e)} id='rating-input' type='text' placeholder='1 to 5' value={rating}></input>
            <label>Review</label>
            <textarea onChange={e => setContent(e.target.value)} id='cotent-input' type='text' placeholder='Your Review Here' value={content}></textarea>
            <div id='review-button-holder'>
                <button id='submit-comment-button'>Submit Review</button>
                <button id='submit-comment-button' onClick={e => handleDelete(e)}>Delete Review</button>
                <button id='submit-comment-button' onClick={e => handleCancel(e)}>Cancel</button>
            </div>


        </form>

    )
}

export default EditReviewForm
