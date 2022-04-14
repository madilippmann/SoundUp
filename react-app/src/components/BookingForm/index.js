import { useState } from "react";

const BookingForm = () => {
    const [date, setDate] = useState();
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const now = new Date();

    return (
        <form onSubmit={handleSubmit}>
            <label for='date'>Rating</label>
            <input
                name='date'
                id='date'
                type='datetime-local'
                min={`${now.getFullYear()}-${now.getMonth()}=${now.getDay() + 1}`}
                onChange={(e) => setDate(() => e.target.value)}
                value={date}
            />

            <label for='description'>Description</label>
            <textarea
                name='description'
                id='description'
                type='text'
                onChange={(e) => setDescription(() => e.target.value)}
                value={description}
            />
        </form>
    );
}

export default BookingForm;
