import React from 'react'
import { useSelector } from 'react-redux'
import './about.css'
import logo from "../images/BetterReads-logos_black.png";
import andrew from "../images/andrew-pic.png"
import eric from "../images/eric-pic.jpg"
import jorge from "../images/jorge-pic.jpeg"
import { Link } from 'react-router-dom';


const About = () => {
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div className='about-outer-container'>
            {!sessionUser &&
                <div id="splash-nav-bar">
                    <Link to="/" ><img alt="logo" id="splash-logo" src={logo}></img></Link>
                    <Link id="about-nav-home-link" to="/" ><p>Home</p></Link>
                </div>
            }
            <p className='about-header'>About BetterReads</p>
            <div className='about-developer'>
                <p className='developer-info'>Developed by Andrew Stilinovic, Eric Geagan, and Jorge Denis</p>
                <p className='developer-info-sub'>BetterReads is a GoodReads clone that allows users to add books to the site's library as well as track their reading habits. Users can also review books to inform others of thier opinions and ratings.</p>
                <p className='developer-info-sub'> If you are looking for a passionate, hardworking web developers please checkout our LinkedIns, Githubs, or Portfolio sites for more information about us and how to contact us.  Thank you for stopping by!</p>
                <div id='all-developer-info-full-container'>
                    <div id='single-dev-info'>
                        <img alt='developer' className='about-image' src={andrew}></img>
                        <p id='single-dev-header'>Andrew Stilinovic</p>
                        <a rel="noreferrer" href='https://github.com/stili87' target='_blank' className='developer-link'>Github</a>
                        <a rel="noreferrer" href='https://www.linkedin.com/in/andrew-stilinovic-94277180/' target='_blank' className='developer-link'>LinkedIn</a>
                        <a rel="noreferrer" href='http://www.andrew-stilinovic.com/' target='_blank' className='developer-link'>My Portfolio</a>
                        <a rel="noreferrer" href='https://felp-aa.herokuapp.com/' target='_blank' className='developer-link'>Felp - A Yelp Clone</a>
                        <a rel="noreferrer" href='https://clear-bnb.herokuapp.com/' target='_blank' className='developer-link'>Clear Bnb - An Air-Bnb Clone</a>
                    </div>
                    <div id='single-dev-info'>
                        <img alt='developer' className='about-image' src={eric}></img>
                        <p id='single-dev-header'>Eric Geagan</p>
                        <a rel="noreferrer" href='https://github.com/ericgeagan' target='_blank' className='developer-link'>Github</a>
                        <a rel="noreferrer" href='https://www.linkedin.com/in/eric-geagan-462323195/' target='_blank' className='developer-link'>LinkedIn</a>
                        <a rel="noreferrer" href='https://ericgeagan.github.io/#' target='_blank' className='developer-link'>My Portfolio</a>
                        <a rel="noreferrer" href='https://aa-homebnb.herokuapp.com/login' target='_blank' className='developer-link'>Home Bnb - An Air-Bnb Clone</a>
                        <a rel="noreferrer" href='https://soundnebula.herokuapp.com/' target='_blank' className='developer-link'>Sound Nebula - A Soundcloud Clone</a>
                    </div>
                    <div id='single-dev-info'>
                        <img alt='developer' className='about-image' src={jorge}></img>
                        <p id='single-dev-header'>Jorge Denis</p>
                        <a rel="noreferrer" href='https://github.com/javidenis' target='_blank' className='developer-link'>Github</a>
                        <a rel="noreferrer" href='https://www.linkedin.com/in/jorge-denis-9749b1198/' target='_blank' className='developer-link'>LinkedIn</a>
                        <a rel="noreferrer" href='https://javidenis.github.io/portfolio/' target='_blank' className='developer-link'>My Portfolio</a>
                        <a rel="noreferrer" href='https://query11.herokuapp.com/' target='_blank' className='developer-link'>Query - A Quora Clone</a>
                        <a rel="noreferrer" href='https://filmdium.herokuapp.com/' target='_blank' className='developer-link'>Filmdium - A Medium Clone</a>
                    </div>
                </div>
            </div>
            <div className='tech-div'>
                <p className='tech-header'>Some of the Technologies Used</p>
                <div id='tech-link-container'>
                <a rel="noreferrer" className="developer-link" href='https://flask.palletsprojects.com/en/2.1.x/' target='_blank'>Flask</a>
                <a rel="noreferrer" className="developer-link" href='https://reactjs.org/docs/getting-started.html' target='_blank'>React </a>
                <a rel="noreferrer" className="developer-link" href='https://redux.js.org/' target='_blank'>Redux</a>
                <a rel="noreferrer" className="developer-link" href='https://www.sqlalchemy.org/' target='_blank'>SQLAlchemy</a>

                </div>
            </div>
        </div>

    )
}

export default About
