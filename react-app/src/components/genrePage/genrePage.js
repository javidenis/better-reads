import React from 'react'
import { useSelector } from 'react-redux'
import LeftDisplay from '../homePage/leftDisplay'
import HomeBook from '../homePage/homeBook'
import { Link, useHistory, useParams } from 'react-router-dom'




function GenrePage() {
    const genreId = useParams().id
    const allBooks = Object.values(useSelector(state => state.books))
    const genre = Object.values(useSelector(state => state.genres)).find(genre => genre.id === Number(genreId))
    const genres = Object.values(useSelector(state => state.genres))
    const history = useHistory()
    
    if (!genre) history.push('/404')

    const books = allBooks.filter(book => book.books_genre.find(genre => genre.id === Number(genreId)))


    return (
        <div id='home-display'>
            <h1 id='home-right-header'>Welcome to Better Reads</h1>
            {books.length > 0 ? <h2 id='home-right-books-header'>Books within the {genre?.name} genre</h2>: <h2 id='home-right-books-header'>No Books in genre {genre?.name}</h2>}
            <div id='home-main'>
                <div id='home-left-display'>
                    <LeftDisplay />
                </div>
                <div id='home-right-display'>
                    {books.map(book => <HomeBook key={book.id} book={book} />)}
                </div>
                <div id='home-genre-list'>
                    <p id='home-genre-list-header'> Books by genre</p>
                    {genres.map(genre => <Link id="home-genre-list-link" to={`/genre/${genre.id}`} key={genre.id}>{genre.name.toUpperCase()}</Link>)}
                </div>
            </div>
        </div>
    )
}

export default GenrePage
