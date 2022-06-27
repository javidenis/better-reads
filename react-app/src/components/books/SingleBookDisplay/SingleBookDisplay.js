import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './single-book-display.css'
import ReviewForm from '../../reviews/review-form/ReviewForm';

function SingleBookDisplay() {
  const bookId = useParams().id
  const thisBook = useSelector(state => state.books)[bookId]
  const sessionUser = useSelector(state => state.session.user)
  const [reviewFormOpen, setReviewFormOpen] = useState(false)

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
          {sessionUser && <button onClick={()=>setReviewFormOpen(!reviewFormOpen)}>Create Review</button> }
          {reviewFormOpen && sessionUser && <ReviewForm thisBook={thisBook} setReviewFormOpen={setReviewFormOpen} />}
      </div>
      </div>
  )
}

export default SingleBookDisplay;
