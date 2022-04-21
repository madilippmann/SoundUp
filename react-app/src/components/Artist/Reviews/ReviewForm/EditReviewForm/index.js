import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


import * as artistsActions from '../../../../../store/artists'
import EditRatingPicker from '../RatingPicker/editRatingPicker.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


import './EditReview.css'
const EditReviewForm = ({ artistId, review, type, setEditReview }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState();
    const [comment, setComment] = useState(review ? review.comment : '');
    const [showErrors, setShowErrors] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        console.log('INITIAL RATING ', review.rating)
        setRating(review.rating)
    }, [])

    useEffect(() => {
        const errors = [];
        if (comment.length > 255) errors.push('Review must be less than 255 characters');
        if (rating < 1 || rating > 5) errors.push('Rating must be between 1 and 5')
        setValidationErrors(errors);
    }, [rating, comment]);



    const handleSubmit = (e) => {
        e.preventDefault()

        if (validationErrors.length) return setShowErrors(true);


        if (type === 'edit') {
            review.rating = rating
            review.comment = comment

            dispatch(artistsActions.editReview(review))
            setEditReview(() => false)

        } else {
            const review = {
                rating,
                comment
            }

            dispatch(artistsActions.createReview(review, artistId))
            setRating(0)
            setComment('')
        }
    }

    return (
        <div id='edit-review__container'>
            <div id='review__user'>
                <FontAwesomeIcon icon={faUserCircle} style={{ color: 'grey', fontSize: '35px' }} />
                <p className='margin-bottom'>{review.user.name}</p>
                {review.user.reviews_count === 1 ?
                    <p className='margin-bottom margin-top'>{review.user.reviews_count} review</p> :
                    <p className='margin-bottom margin-top smaller-text'>{review.user.reviews_count} reviews</p>
                }
            </div>

            <form id='edit-review__form' onSubmit={handleSubmit}>

                {!showErrors ? null : (
                    <div className='error-container'>
                        {validationErrors.map(err => (
                            <div key={err}>{err}</div>
                        ))}
                    </div>
                )}
                <div id='edit-review__comment-and-rating'>
                    <div id='rating__container'>
                        <label htmlFor='rating'>Edit Rating</label>
                        <EditRatingPicker rating={rating} setRating={setRating} />
                    </div>

                    <div id='comment__container'>
                        <label htmlFor='comment'>Comment</label>
                        <input
                            type='text'
                            name='comment'
                            id='comment'
                            placeholder='Start writing comment...'
                            onChange={(e) => setComment(() => e.target.value)}
                            value={comment}
                        />
                    </div>

                </div>
                <div id='edit-review__buttons'>
                    <button id='comment__button'>Submit</button>
                    {type === 'edit' && <button type='button' id='comment__button' onClick={() => setEditReview(() => false)}>Cancel</button>}
                </div>
            </form>
        </div>
    );
}

export default EditReviewForm;
