import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './single-book-display.css'
import ReviewForm from '../../reviews/review-form/ReviewForm';
import SingleReviewDisplay from '../../reviews/single-review-display/single-review-display';
import { addBookToBookshelfThunk } from '../../../store/bookshelves'
import ReadStatus from '../../readstatus/readstatus';

function SingleBookDisplay() {
  const bookId = useParams().id
  const thisBook = useSelector(state => state.books)[bookId]
  const sessionUser = useSelector(state => state.session.user)
  const userBookshelves = Object.values(useSelector(state => state?.bookshelves)).filter(bookshelf => bookshelf?.user_id === sessionUser?.id)
  const [reviewFormOpen, setReviewFormOpen] = useState(false)
  const [selectedBookshelf, setSelectedBookshelf] = useState('')
  const reviews = Object.values(useSelector(state => state.reviews))
  const thisReviews = reviews.filter(review => Number(review.book_id) === Number(bookId))
  const history = useHistory()
  const dispatch = useDispatch()

  const handleBookshelfSubmit = async e => {
    e.preventDefault()

    const payload = {
      bookshelf_id: selectedBookshelf,
      user_id: sessionUser.id,
      book: thisBook,
    }

    const data = await dispatch(addBookToBookshelfThunk(payload))
  }

  const handleEditButton = () => {
    history.push(`/books/${bookId}/edit`)
  }

  return (
    <div id='book-display-full-page'>
      <div id='single-book-display'>
        <div id='left-display'>
          <img alt='cover-art' id='book-cover-art' src={thisBook.cover_url} />
          {sessionUser?.id === thisBook?.user_id && <button onClick={() => handleEditButton()}>Edit Book</button>}
          {sessionUser?.id === thisBook?.user_id &&
            <form onSubmit={(e) => handleBookshelfSubmit(e)}>
              <select
                value={selectedBookshelf}
                onChange={e => setSelectedBookshelf(e.target.value)}
              >
                {Object.values(userBookshelves).map(bookshelf =>
                  <option key={bookshelf.id} value={bookshelf.id}>{bookshelf.name}</option>
                )}
              </select>
              <button type='submit'>Submit</button>
            </form>
          }
          {sessionUser && <ReadStatus thisBook={thisBook} />}
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
