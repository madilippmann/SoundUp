import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as artistsActions from '../../store/artists.js';

const ReviewForm = ({ artist }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');
    const [showErrors, setShowErrors] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (comment.length > 255) errors.push('Review must be less than 255 characters');
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

        // const review = await dispatch(artistsActions.createReview(data))

        dispatch(artistsActions.createReview(review, artist.id))
            .then(async review => {
                // dispatch(hideLoading());
                // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                // return history.push(`/`);
                return
            })
            .catch(async (res) => {
                console.log(res);
                const data = await res.json();
                if (data && data.errors) {
                    setValidationErrors(data.errors);
                    setShowErrors(true);
                }
            });
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
            </form>
        </>
    );
}

export default ReviewForm;
