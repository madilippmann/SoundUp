import React from 'react';
import ReviewForm from './ReviewForm/index.js';
import ReviewCard from './ReviewCard.js';

import './Reviews.css';

const Reviews = ({ artist }) => {


    return (
        <div>
            <div id='reviews__add'>
                <ReviewForm artistId={artist.id} review={null} />
            </div>

            <div id='reviews__list'>
                <h3>Reviews</h3>
                <ul>
                    {artist.reviews.map(review => <ReviewCard review={review} />)}
                </ul>
            </div>
        </div >
    )
}

export default Reviews;
