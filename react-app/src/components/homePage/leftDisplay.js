import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import gitHub from '../images/github.png'
import linkedin from '../images/linkedin.png'
import './home-page.css'

function LeftDisplay() {
    const sessionUser = useSelector((state) => state.session.user)
    const books = useSelector(state => state.books)
    const readStatus = useSelector(state => state.readStatus)
    const currentlyReading = Object.values(useSelector(state => state.readStatus)).filter(status => status.user_id === sessionUser.id && status.readStatus === "Currently Reading")
    const wantToRead = Object.values(useSelector(state => state.readStatus)).filter(status => status.user_id === sessionUser.id && status.readStatus === "Want To Read")
    const bookshelves = Object.values(useSelector(state => state.bookshelves)).filter(bookshelf => bookshelf.user_id === sessionUser.id)
    const read = Object.values(useSelector(state => state.readStatus)).filter(status => status.user_id === sessionUser.id && status.readStatus === "Read")
    const [currentBooks, setCurrentBooks] = useState([])

    
    
    
    useEffect(()=> {
        const bookIds = currentlyReading.map(status => status.book_id)
        
        
        const currentBooksArr = bookIds?.map(id => {
            return books[id]
        })


        if (currentBooksArr.length > 0 && currentBooksArr.length < 2) {
            setCurrentBooks([currentBooksArr[0]])
        } else if (currentBooksArr.length >= 2) {
            setCurrentBooks([currentBooksArr[0], currentBooksArr[1]])
        }
    }, [books, readStatus])

    const wantBookIds = wantToRead.map(status => status.book_id)
    const wantBooksArr = wantBookIds.map(id => {
        return books[id]
    },[readStatus])


    let wantBooks = []
    if (wantBooksArr.length > 0) {
        for (let i = 0; i < 6; i++) {
            let book = wantBooksArr[i]
            if (book) wantBooks.push(book)
        }
    }

    return (
        <div id='full-left-display'>
            <div id='left-currently-reading-main'>
                <div id='home-genre-list-header'>Developers</div>
                <div id='footer-link'>
                    <a href='https://github.com/ericgeagan'><img className='icon' src={gitHub}></img></a>
                    <a href='https://www.linkedin.com/in/eric-geagan-462323195/'><img className='icon' src={linkedin}></img></a>
                    <a id='name' href='https://github.com/ericgeagan'>Eric Geagan</a>
                </div>
                <div id='footer-link'>
                    <a href='https://github.com/stili87'><img className='icon' src={gitHub}></img></a>
                    <a href='https://www.linkedin.com/in/andrew-stilinovic-94277180/'><img className='icon' src={linkedin}></img></a>
                    <a id='name' href='https://github.com/stili87'>Andrew Stilinovic</a>                            
                </div>
                <div  id='footer-link'>
                    <a href='https://github.com/javidenis'><img className='icon' src={gitHub}></img></a>
                    <a href='https://www.linkedin.com/in/jorge-denis-9749b1198/'><img className='icon' src={linkedin}></img></a>
                    <a id='name' href='https://github.com/javidenis'>Jorge Denis</a>                            
                </div>
                <div className='bottom-link' id='footer-link'>
                    <a href='https://github.com/IamxiaoSheep'><img className='icon' src={gitHub}></img></a>
                    <a href='https://www.linkedin.com/'><img className='icon' src={linkedin}></img></a>
                    <a id='name' href='https://github.com/IamxiaoSheep'>Jorge Cardenas</a>                            
                </div>
                <p id='left-currently-reading-header'>CURRENTLY READING</p>
                {currentBooks?.length > 0 ? currentBooks?.map(book => book && 
                    <div key={book?.id} id='left-book-info'>
                        <div id='left-full-book'>
                            <Link to={`/books/${book?.id}`}><img id='left-book-img' alt='book-cover' src={book?.cover_url}></img></Link>
                        </div>
                        <div id='left-book-other'>
                            <Link id='left-book-other-title' to={`/books/${book?.id}`}>{book?.title}</Link>
                            <p id='left-book-other-author' >{book?.author}</p>
                        </div>
                    </div>
                ) : <div>No books currently being read</div>}
            </div>
            <div id='left-want-to-read-main'>
                <p id='left-currently-reading-header'>WANT TO READ</p>
                {wantBooks.length > 0 ?
                    wantBooks.map(book => book && <Link id='want-to-read-link' key={book.id} to={`/books/${book.id}`}><img alt='book cover' id='want-read-img' src={book.cover_url}></img></Link>)


                    : <div>No Books you want to read</div>}

            </div>
            <div id='left-bookshelves-main'>
                <p id='left-bookshelves-header'>Bookshelves</p>
                <div id='left-bookshelves-list'>
                    <Link className='left-bookshelf-links' to='/bookshelves/want'> {wantToRead.length} &nbsp;&nbsp;&nbsp; Want to Read</Link>
                    <Link className='left-bookshelf-links' to='/bookshelves/current'> {currentlyReading.length} &nbsp;&nbsp;&nbsp; Currently Reading</Link>
                    <Link className='left-bookshelf-links' to='/bookshelves/read'> {read.length} &nbsp;&nbsp;&nbsp; Read</Link>
                    {bookshelves && bookshelves.map(bookshelf => <Link key={bookshelf.id} className='left-bookshelf-links' to={`/bookshelves/${bookshelf.id}`}> {Object.values(bookshelf.books).length} &nbsp;&nbsp;&nbsp;  {bookshelf.name}</Link>)}
                </div>
            </div>
        </div>
    )
}


export default LeftDisplay
