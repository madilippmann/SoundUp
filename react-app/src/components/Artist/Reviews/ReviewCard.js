import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as artistsActions from '../../../store/artists'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faEllipsis, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import ReviewForm from './ReviewForm';

import fiveStars from '../../../static/ratings/5-stars.png'
import fourHalfStars from '../../../static/ratings/4.5-stars.png';
import fourStars from '../../../static/ratings/4-stars.png';
import threeHalfStars from '../../../static/ratings/3.5-stars.png';
import threeStars from '../../../static/ratings/3-stars.png';
import twoHalfStars from '../../../static/ratings/2.5-stars.png';
import twoStars from '../../../static/ratings/2-stars.png';
import oneHalfStars from '../../../static/ratings/1.5-stars.png';
import oneStar from '../../../static/ratings/1-star.png';
import halfStar from '../../../static/ratings/0.5-stars.png';
import noRatings from '../../../static/ratings/no-ratings.png';





const ReviewCard = ({ review }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [editReview, setEditReview] = useState(false);

    const [showEditDropdown, setShowEditDropdown] = useState(false);

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

    const deleteReview = async () => {
        await dispatch(artistsActions.removeReview(review.id));
    }

    const formattedDate = (date) => {
        const splitDate = date.split(' ');
        return `${splitDate[2]} ${splitDate[1]}, ${splitDate[3]}`;
    }


    const openEditDropdown = () => {
        if (showEditDropdown) return;
        document.querySelector('#edit-review__dropdown')
        setShowEditDropdown(true);
    }

    useEffect(() => {
        // if (showFollowers) setShowFollowers(() => false)
        if (!showEditDropdown) return;

        const closeEditDropdown = () => {
            document.querySelector('#edit-review__dropdown')
            setShowEditDropdown(false);
        };

        document.addEventListener('click', closeEditDropdown);

        return () => {
            setShowEditDropdown(false);
            document.removeEventListener("click", closeEditDropdown);
        }

    }, [showEditDropdown]);

    return (
        <div>

            {!editReview ?
                <div key={review.id} id='review__container'>
                    <div id='review__user'>
                        <FontAwesomeIcon icon={faUserCircle} style={{ color: 'grey', fontSize: '35px' }} />
                        <p>{review.user.name}</p>
                        {review.user.reviews_count === 1 ?
                            <p>{review.user.reviews_count} review</p> :
                            <p>{review.user.reviews_count} reviews</p>
                        }
                    </div>

                    <div id='review__details'>
                        <div id='review-rating-and-date'>
                            <img id='review-card__rating' src={getRatingImage(review.rating)} alt={`${review.rating}-star rating`} />
                            <p>{formattedDate(review.created_at)}</p>
                        </div>
                        <p>{review.comment}</p>
                    </div>


                    {sessionUser.id === review.user.id &&
                        <div>
                            <button type='button' onClick={openEditDropdown}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </button>

                            {showEditDropdown &&
                                <div id='edit-review__dropdown'>
                                    <div id='edit-review__options'>
                                        <button type='button' onClick={() => setEditReview(true)}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                            Edit Review
                                        </button>

                                        <button type='button' onClick={deleteReview}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                            Delete Review
                                        </button>

                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
                :
                <ReviewForm review={review} type='edit' setEditReview={setEditReview} />
            }


        </div>
    )
}

export default ReviewCard;
