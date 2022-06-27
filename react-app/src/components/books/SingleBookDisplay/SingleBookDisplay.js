import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './single-book-display.css'
import ReviewForm from '../../reviews/review-form/ReviewForm';
import SingleReviewDisplay from '../../reviews/single-review-display/single-review-display';

function SingleBookDisplay() {
  const bookId = useParams().id
  const thisBook = useSelector(state => state.books)[bookId]
  const sessionUser = useSelector(state => state.session.user)
  const [reviewFormOpen, setReviewFormOpen] = useState(false)
  const reviews = Object.values(useSelector(state => state.reviews))
  const thisReviews = reviews.filter(review => Number(review.book_id) === Number(bookId))

  return (
    <div id='book-display-full-page'>
      <div id='single-book-display'>
        <div id='left-display'>
          <img alt='cover-art' id='book-cover-art' src={thisBook.cover_url} />
        </div>
        <div id='right-display'>
          <h1 id='book-title'>{thisBook.title}</h1>
          <h2 id='book-author'>by {thisBook.author}</h2>
          <h3 id='book-subheading'>{thisBook.sub_heading}</h3>
          <h4 id='book-description'>{thisBook.description}</h4>
        </div>
      </div>
      <div id='reviews-display'>
        <p>Reviews</p>
        {sessionUser && <button onClick={() => setReviewFormOpen(!reviewFormOpen)}>Create Review</button>}
        {reviewFormOpen && sessionUser && <ReviewForm thisBook={thisBook} setReviewFormOpen={setReviewFormOpen} />}
        {thisReviews.length < 1 && <p>No Reviews yet!</p>}
        {thisReviews && thisReviews.map(review => <SingleReviewDisplay key={review.id} review={review} />)}
      </div>
    </div>
  )
}

export default SingleBookDisplay;
