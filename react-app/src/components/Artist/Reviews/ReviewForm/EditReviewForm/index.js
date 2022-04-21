import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


import * as artistsActions from '../../../../../store/artists'
import EditRatingPicker from '../RatingPicker/editRatingPicker.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


import './EditReview.css'
const EditReviewForm = ({ artistId, review, setEditReview }) => {
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
        if (comment.length > 255 || comment.length === 0) errors.push('Comment must be between 1 and 255 characters');
        if (rating < 1 || rating > 5) errors.push('Rating must be between 1 and 5')
        setValidationErrors(errors);
    }, [rating, comment]);


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validationErrors.length) return setShowErrors(true);

        review.rating = rating
        review.comment = comment

        let res = await dispatch(artistsActions.editReview(review))
        if (res.errors) {
            res.errors.forEach(error => {
                setValidationErrors((prev) => [...prev, error])
            })
            return setShowErrors(true)
        } else {
            setEditReview(() => false)
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

                <div id='edit-review__comment-and-rating'>
                    {!showErrors ? null : (
                        <div className='error-container edit-review'>
                            {validationErrors.map(err => (
                                <div key={err}>{err}</div>
                            ))}
                        </div>
                    )}
                    <div id='rating__container'>
                        <label className='edit-review__label' htmlFor='rating'>Edit Rating</label>
                        <EditRatingPicker rating={rating} setRating={setRating} />
                    </div>

                    <div id='comment__container'>
                        <label className='edit-review__label' htmlFor='comment'>Edit Comment</label>
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
                    <button type='button' id='comment__button' onClick={() => setEditReview(() => false)}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default EditReviewForm;
