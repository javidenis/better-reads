import './home-page.css'
import React from 'react'
import { useSelector } from 'react-redux'
import HomeBook from './homeBook'
import LeftDisplay from './leftDisplay'



function HomePage() {
    const books = Object.values(useSelector(state => state.books))


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
            </div>
        </div>
    )
}

export default HomePage
