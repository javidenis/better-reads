import React from 'react'
import { useSelector } from 'react-redux'
import LeftDisplay from '../homePage/leftDisplay'
import HomeBook from '../homePage/homeBook'
import { Link, useParams } from 'react-router-dom'




function SearchResults() {
    const originalTerms = useParams().terms
    const terms = originalTerms.toLowerCase()
    const allBooks = Object.values(useSelector(state => state.books))
    const genres = Object.values(useSelector(state => state.genres)).sort((a,b) => {
        if(a.name > b.name)return 1
        return -1
            })

    const books = allBooks.filter(book => {
        const bookGenres = Object.values(book.books_genre)
        for(let i = 0; i < bookGenres.length; i++){
            if(bookGenres[i].name.toLowerCase() === terms) return true
        }
        if(book.title.toLowerCase().includes(terms)) return true
        if(book.author.toLowerCase().includes(terms)) return true
        return false
    })

    


    return (
        <div id='home-display'>
            <h1 id='home-right-header'>Welcome to Better Reads</h1>
            {books.length > 0 ? <h2 id='home-right-books-header'>Search Results for {originalTerms}</h2>: <h2 id='home-right-books-header'>No Results for {originalTerms}</h2>}
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

export default SearchResults
