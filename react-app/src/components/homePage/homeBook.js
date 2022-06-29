import React from 'react'
import { Link } from 'react-router-dom'
import BookshelfButton from '../bookshelves/BookshelfButton'
import ReadStatus from '../readstatus/readstatus'

function HomeBook({book}) {

    const bookDescription = book.description.slice(0, 175)

    return (
    <div id="home-book-main">
        <Link to={`/books/${book.id}`} id='home-book-left'>
            <img alt='book cover' src={book.cover_url}></img>
        </Link>
        <div id='home-book-right'>
            <Link id='home-book-title' to={`/books/${book.id}`}>{book.title}</Link>
            <p id='home-book-author'> by {book.author}</p>
            <div id='buttons-div'>
                <ReadStatus thisBook={book}></ReadStatus>
                <BookshelfButton thisBook={book} />
            </div>
            <p id='home-book-description'>{bookDescription}...<Link id='home-book-continue-link' to={`/books/${book.id}`}>Continue reading</Link></p>
        </div>
    </div>
    
    )
}

export default HomeBook
