import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as artistsActions from '../../store/artists.js';

const ReviewForm = ({ artistId, review, type, setEditReview }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(review ? review.rating : 1);
    const [comment, setComment] = useState(review ? review.comment : '');
    const [showErrors, setShowErrors] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

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
        }
    }

    return (
        <>
            {!showErrors ? null : (
                <div className='error-container'>
                    {validationErrors.map(err => (
                        <div key={err}>{err}</div>
                    ))}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <label htmlFor='rating'>Rating</label>
                <input
                    type='number'
                    name='rating'
                    id='rating'
                    min={1}
                    max={5}
                    onChange={(e) => setRating(() => e.target.value)}
                    value={rating}
                />

                <label htmlFor='comment'>Comment</label>
                <input
                    type='text'
                    name='comment'
                    id='comment'
                    onChange={(e) => setComment(() => e.target.value)}
                    value={comment}
                />
                <button>Submit</button>
                {type === 'edit' && <button type='button' onClick={() => setEditReview(() => false)}>Cancel</button>}
            </form>
        </>
    );
}

export default ReviewForm;
