import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import LeftDisplay from '../homePage/leftDisplay';
import ProfileReviewDisplay from '../reviews/profile-review-display/profileReview';
import './profile.css'

function Profile() {
    const sessionUser = useSelector(state => state.session.user);
    const reviews = Object.values(useSelector(state => state.reviews))
    const userReviews = reviews.filter(review => review.user_id === sessionUser.id)
    const books = Object.values(useSelector(state => state.books))

    return (
        < div id='profile-full-page'>
            <div id='profile-header'>
                Welcome {sessionUser.name}
            </div>
            <div id='left-and-profile'>
                <div id='home-left-display'>
                    <LeftDisplay />
                </div>
                <div id='profile-container'>
                    
                        <img id='profile-image' src={sessionUser.picture_url} />
                        <div id='profile-details'>
                            <div id='profile-name'>{sessionUser.name}</div>
                            <div id='profile-details-inner'><span id='profile-detail-header'>Details:</span> {sessionUser.bio || 'No bio was added'}</div>
                    </div>
                </div>
            </div>
            <div id='profile-reviews-container'>
                <p id='profile-reviews-header'>REVIEWS</p>
            {userReviews.map(review => (
                <ProfileReviewDisplay reviewId={review.id}></ProfileReviewDisplay>
            )) || <div>No Reviews</div>}
            </div>
        </div >
    )
}

export default Profile
