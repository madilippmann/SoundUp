import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import GenresContainer from './GenresContainer';
import './ArtistCard.css'

import fiveStars from '../../../../static/ratings/5-stars.png';
import fourHalfStars from '../../../../static/ratings/4.5-stars.png';
import fourStars from '../../../../static/ratings/4-stars.png';
import threeHalfStars from '../../../../static/ratings/3.5-stars.png';
import threeStars from '../../../../static/ratings/3-stars.png';
import twoHalfStars from '../../../../static/ratings/2.5-stars.png';
import twoStars from '../../../../static/ratings/2-stars.png';
import oneHalfStars from '../../../../static/ratings/1.5-stars.png';
import oneStar from '../../../../static/ratings/1-star.png';
import halfStar from '../../../../static/ratings/0.5-stars.png';
import noRatings from '../../../../static/ratings/no-ratings.png';


const ArtistCard = ({ artist }) => {

    const getRatingImage = (rating) => {
        if (rating == 5) { return fiveStars }
        else if (rating >= 4.5) { return fourHalfStars }
        else if (rating >= 4) { return fourStars }
        else if (rating >= 3.5) { return threeHalfStars }
        else if (rating >= 3) { return threeStars }
        else if (rating >= 2.5) { return twoHalfStars }
        else if (rating >= 2) { return twoStars }
        else if (rating >= 1.5) { return oneHalfStars }
        else if (rating >= 1) { return oneStar }
        else if (rating >= .5) { return halfStar }
        else return noRatings
    }


    return (
        <Link to={`/artists/${artist.id}`}>
            <div id='artist__card'>
                <div id='artist__image'>
                    <img src={artist.profile_image_url} alt={`${artist.name}'s profile picture`} />
                </div>

                <div id='artist___info-container'>
                    <h4 id='artist__card-title'>{artist.name}</h4>

                    <div className='ratings__container'>
                        <img id='rating__image' src={getRatingImage(artist.average_rating)} alt='five star rating' />
                        {artist.reviews_length === 1 ? <span>{artist.reviews_length} review </span> : <span>{artist.reviews_length} reviews</span>}
                    </div>

                    <p id='artist__rate'>${artist.rate} / hour</p>

                    <div id='genre__container'>
                        <GenresContainer genres={artist.genres} />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ArtistCard;
