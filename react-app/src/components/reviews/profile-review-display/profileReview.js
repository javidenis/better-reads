import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import EditReviewForm from '../edit-review-form/edit-review-form'


function ProfileReviewDisplay({ reviewId }) {
    const sessionUser = useSelector(state => state.session.user)
    const review = useSelector(state =>state.reviews[reviewId])
    const [reviewFormOpen, setReviewFormOpen] = useState(false)
    const [moreOrLess, setMoreOrLess] = useState('...more')
    const [reviewContent, setReviewContent] = useState(review.content.slice(0, 501) || '')
    const books = Object.values(useSelector(state => state.books))
    const thisBook = books.find(book => book.id === review.book_id)
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
            <Link to={`/books/${thisBook.id}`}><img id='single-review-profile-pic' alt='profile' src={thisBook.cover_url}></img></Link>
            <div id='single-review-content'>
            <Link id='single-review-content-link' to={`/books/${thisBook.id}`}><p>{thisBook.title}</p></Link>
                <p>Rated at: {review.rating}</p>
                <div>{reviewContent}</div>
                {review.content.length > 501 && <p id='single-book-expand-description' onClick={() => handleDescriptionExpand()}>{moreOrLess}</p>}


            </div>
        </div>
    )
}

export default ProfileReviewDisplay
