import './home-page.css'
import React from 'react'
import { useSelector } from 'react-redux'
import HomeBook from './homeBook'
import LeftDisplay from './leftDisplay'
import { Link } from 'react-router-dom'
import gitHub from '../images/github.png'
import linkedin from '../images/linkedin.png'

function HomePage() {
    const books = Object.values(useSelector(state => state.books))
    const genres = Object.values(useSelector(state => state.genres)).slice(0, 20)


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
                <div id='home-genre-about'>
                    <div id='home-genre-list'>
                        <p id='home-genre-list-header'> Books by genre</p>
                        {genres.map(genre => <Link id="home-genre-list-link" to={`/genre/${genre.id}`} key={genre.id}>{genre.name.toUpperCase()}</Link>)}
                    </div>
                    <div id='footer-container'>
                        <div id='home-genre-list-header'>About Us</div>
                        <div id='footer-link'>
                            <a href='https://github.com/ericgeagan'><img class='icon' src={gitHub}></img></a>
                            <a href='https://www.linkedin.com/in/eric-geagan-462323195/'><img class='icon' src={linkedin}></img></a>
                            <p id='name'>Eric Geagan</p>
                        </div>
                        <div id='footer-link'>
                            <a href='https://github.com/stili87'><img class='icon' src={gitHub}></img></a>
                            <a href='https://www.linkedin.com/in/andrew-stilinovic-94277180/'><img class='icon' src={linkedin}></img></a>
                            <p id='name'>Andrew Stilinovic</p>                            
                        </div>
                        <div id='footer-link'>
                            <a href='https://github.com/javidenis'><img class='icon' src={gitHub}></img></a>
                            <a href='https://www.linkedin.com/in/jorge-denis-9749b1198/'><img class='icon' src={linkedin}></img></a>
                            <p id='name'>Jorge Denis</p>                            
                        </div>
                        <div id='footer-link'>
                            <a href='https://github.com/IamxiaoSheep'><img class='icon' src={gitHub}></img></a>
                            <a href=''><img class='icon' src={linkedin}></img></a>
                            <p id='name'>Jorge Cardenas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
