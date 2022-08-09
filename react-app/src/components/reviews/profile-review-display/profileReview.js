import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

function ProfileReviewDisplay({ reviewId }) {

    const review = useSelector(state =>state.reviews[reviewId])

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

    const handleError = (e) => {
        e.target.src = ''
        e.target.src = thisBook?.cover_url
    }

    return (
        <div id='single-review-full-container'>
            <Link to={`/books/${thisBook.id}`}><img id='single-review-profile-pic' onError={e => handleError(e)} alt='profile' src={thisBook.cover_url}></img></Link>
            <div id='single-review-content'>
            <Link id='single-review-content-link' to={`/books/${thisBook.id}`}><p>{thisBook.title}</p></Link>
                {/* <p>Rated at: {review.rating}</p> */}
                <p>Rated it <Rating size={15} readonly ratingValue={review?.rating * 20}/></p>
                <div>{reviewContent}</div>
                {review.content.length > 501 && <p id='single-book-expand-description' onClick={() => handleDescriptionExpand()}>{moreOrLess}</p>}


            </div>
        </div>
    )
}

export default ProfileReviewDisplay
