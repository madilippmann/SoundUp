import { useState } from "react";

const BookingForm = () => {
    const [date, setDate] = useState();
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit}>
            <label for='date'>Rating</label>
            <input
                name='date'
                id='date'
                type='datetime-local'
                min={new Date.now()}
                onChange={(e) => setDate(() => e.target.value)}
                value={date}
            />

            <label for='description'>Description</label>
            <input
                name='description'
                id='description'
                type='datetime-local'
                min={new Date.now()}
                onChange={(e) => setDescription(() => e.target.value)}
                value={description}
            />
        </form>
    );
}

export default BookingForm;
