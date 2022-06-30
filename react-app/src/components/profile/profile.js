import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import LeftDisplay from '../homePage/leftDisplay';
import './profile.css'

function Profile() {
    const sessionUser = useSelector(state => state.session.user);
    const reviews = Object.values(useSelector(state => state.reviews))
    const userReviews = reviews.filter(review => review.user_id === sessionUser.id)
    const books = Object.values(useSelector(state => state.books))

    return (
        < div >
            <div id='left-and-profile'>
                <div>
                    <LeftDisplay />
                </div>
                <div id='profile-container'>
                    <div id='profile-description'>
                        <div><img id='profile-image' src={sessionUser.picture_url} /></div>
                        <div>
                            <div>{sessionUser.name}</div>
                            <div>{sessionUser.bio || <p>No bio was added</p>}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>{`${sessionUser.name}'s Bookshelves`}</div>
            <div>REVIEWS</div>
            {userReviews.map(review => (
                <div>
                    <img src={books.find(book => book.id === review.book_id).cover_url} />
                    <div>{books.find(book => book.id === review.book_id).title}</div>
                    <div>{review.rating}</div>
                    <div>{review.content}</div>
                </div>
            )) || <div>No Reviews</div>}
        </div >
    )
}

export default Profile