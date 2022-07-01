import './home-page.css'
import React from 'react'
import { useSelector } from 'react-redux'
import HomeBook from './homeBook'
import LeftDisplay from './leftDisplay'
import { Link } from 'react-router-dom'



function HomePage() {
    const books = Object.values(useSelector(state => state.books)).reverse()
    const genres = Object.values(useSelector(state => state.genres))


    return (
        <div id='home-display'>
            <h1 id='home-right-header'>Welcome to Better Reads</h1>
            <h2 id='home-right-books-header'>List of Recent Books</h2>
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

export default HomePage
