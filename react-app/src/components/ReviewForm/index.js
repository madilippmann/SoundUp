import { useState } from 'react';

const ReviewForm = () => {
    const [rating, setRating] = useState()
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label for='rating'>Rating</label>
            <input
                type='number'
                name='rating'
                id='rating'
                min={1}
                max={5}
                onChange={(e) => setRating(() => e.target.value)}
                value={rating}
            />

            <label for='comment'>Rating</label>
            <input
                type='text'
                name='comment'
                id='comment'
                onChange={(e) => setComment(() => e.target.value)}
                value={comment}
            />
        </form>
    );
}

export default ReviewForm;
