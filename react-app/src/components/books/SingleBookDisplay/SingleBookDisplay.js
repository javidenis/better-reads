import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SingleBookDisplay() {
  const bookId = useParams().id
  const thisBook = useSelector(state => state.books)[bookId]

  return (
    <>
      <div>
        <img src={thisBook.cover_url} />
      </div>
      <div>
        
      </div>
    </>
  )
}

export default SingleBookDisplay;