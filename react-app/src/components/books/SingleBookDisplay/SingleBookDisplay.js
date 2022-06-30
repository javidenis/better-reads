import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';
import './single-book-display.css'
import ReviewForm from '../../reviews/review-form/ReviewForm';
import SingleReviewDisplay from '../../reviews/single-review-display/single-review-display';
import ReadStatus from '../../readstatus/readstatus';
import BookshelfButton from '../../bookshelves/BookshelfButton';

function SingleBookDisplay() {
  const bookId = useParams().id
  const thisBook = useSelector(state => state.books)[bookId]
  const sessionUser = useSelector(state => state.session.user)
  const [reviewFormOpen, setReviewFormOpen] = useState(false)
  const [description, setDescription] = useState(thisBook.description.slice(0, 137) || '')
  const [moreOrLess, setMoreOrLess] = useState('...more')
  const reviews = Object.values(useSelector(state => state.reviews))
  const thisReviews = reviews.filter(review => Number(review.book_id) === Number(bookId))
  const history = useHistory()
  const genres = thisBook.books_genre.map(genre => genre)

  const avgRatingFunc = () => {
    let count = 0
    thisReviews.forEach(review => {
      count += review.rating
    })
    return (count / thisReviews.length).toFixed(2)
  }
  let avgRating = avgRatingFunc()

  const pubYear = thisBook.publish_date.split(' ')[3]
  const pubDay = thisBook.publish_date.split(' ')[1]
  const pubMonth = thisBook.publish_date.split(' ')[2]


  const handleDescriptionExpand = () => {
    if (moreOrLess === '...more') {
      setDescription(thisBook.description)
      setMoreOrLess('(less)')
    } else {
      setDescription(thisBook.description.slice(0, 137))
      setMoreOrLess('...more')
    }
  }



  const handleEditButton = () => {
    history.push(`/books/${bookId}/edit`)
  }

  return (
    <div id='book-display-full-page'>
      <div id='single-book-display'>
        <div id='single-book-left-display'>
          <img alt='cover-art' id='single-book-cover-art' src={thisBook.cover_url} />
          {sessionUser?.id === thisBook?.user_id && <div id='single-book-edit-button' onClick={() => handleEditButton()}>Edit Book</div>}
          {sessionUser && <ReadStatus thisBook={thisBook} />}
          {sessionUser && <BookshelfButton thisBook={thisBook} />}
        </div>
        <div id='single-book-right-display'>
          <h1 id='single-book-book-title'>{thisBook.title}</h1>
          <h2 id='single-book-book-author'>by {thisBook.author}</h2>
          <p id='single-book-book-genres'>Genres: {genres.map(genre => <Link id='single-book-genre-links' key={genre.id} to={`/genres/${genre.id}`}> {genre.name} </Link>)}</p>
          {avgRating >= 0 && <p>Rating: {`${avgRating} / 5`}</p>}
          <p id='single-book-book-genres'>Published: {pubMonth}-{pubDay}-{pubYear}</p>
          <h3 id='single-book-book-subheading'>{thisBook.sub_heading}</h3>
          <h4 id='single-book-book-description'>{description}</h4>
          <p id='single-book-expand-description' onClick={() => handleDescriptionExpand()}>{moreOrLess}</p>
        </div>

      </div>
      <div id='single-book-reviews-display'>
        <p id='single-book-reviews-header'>Community Reviews</p>
        <div id='single-book-create-review-container'>
          <img alt='profile' id='single-book-create-review-profile-pic' src={sessionUser.picture_url}></img>
          <div id='single-book-create-review-profile-container'>
            <p> {sessionUser.name}, start your review of {thisBook.title.slice(0, 43)} ...</p>
            {sessionUser && <button id='single-book-create-review-button' onClick={() => setReviewFormOpen(!reviewFormOpen)}>Write a Review</button>}

            {reviewFormOpen && sessionUser && <ReviewForm thisBook={thisBook} setReviewFormOpen={setReviewFormOpen} />}
          </div>
        </div>

        {thisReviews.length < 1 && <p id='single-book-no-reviews'>No Reviews yet!</p>}
        {thisReviews && thisReviews.map(review => <SingleReviewDisplay key={review.id} reviewId={review.id} />)}
      </div>
    </div>
  )
}

export default SingleBookDisplay;
