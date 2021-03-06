import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RatingPicker from './RatingPicker';

import * as artistsActions from '../../../../store/artists'
import * as usersActions from '../../../../store/session'

const ReviewForm = ({ artistId, review }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(review ? review.rating : 0);
    const [comment, setComment] = useState(review ? review.comment : '');
    const [showErrors, setShowErrors] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (comment.length > 255 || comment.length === 0) errors.push('Review must be between 1 and 255 characters');
        if (rating < 1 || rating > 5) errors.push('Rating must be between 1 and 5')
        setValidationErrors(errors);
    }, [rating, comment]);



    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validationErrors.length) return setShowErrors(true);


        const review = {
            rating,
            comment
        }

        let res = await dispatch(artistsActions.createReview(review, artistId))
        await dispatch(usersActions.loadUser())

        if (res.errors) {
            res.errors.forEach(error => {
                setValidationErrors((prev) => [...prev, error])
            })
            return setShowErrors(true)
        } else {
            setShowErrors(false)
            setRating(0)
            setComment('')
        }

    }

    return (
        <div id='new-review__container'>

            <h3 id='reviews__title'>Add New Review</h3>


            {!showErrors ? null : (
                <div className='error-container review'>
                    {validationErrors.map(err => (
                        <div key={err}>{err}</div>
                    ))}
                </div>
            )}

            <form id='review__form' onSubmit={handleSubmit}>
                {/* <input
                    type='number'
                    name='rating'
                    id='rating'
                    min={1}
                    max={5}
                    onChange={(e) => setRating(() => e.target.value)}
                    value={rating}
                /> */}
                <div id='rating__container'>
                    <label htmlFor='rating'>Rating</label>
                    <RatingPicker rating={rating} setRating={setRating} />
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
                <button id='comment__button'>Submit</button>
            </form>
        </div>
    );
}

export default ReviewForm;
