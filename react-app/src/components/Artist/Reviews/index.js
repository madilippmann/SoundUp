import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm/index.js';
import ReviewCard from './ReviewCard.js';


const Reviews = ({ artist }) => {


    return (
        <div>
            <h3>Create New Review</h3>
            <ReviewForm artistId={artist.id} review={null} />

            <div>
                <h3>Reviews</h3>
                <ul>
                    {artist.reviews.map(review => <ReviewCard review={review} />)}
                </ul>
            </div>
        </div >
    )
}

export default Reviews;
