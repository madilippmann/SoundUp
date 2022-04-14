import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as artistsActions from '../../store/artists.js';

const BookingForm = ({ artist }) => {
    const [date, setDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [description, setDescription] = useState('');

    const [showErrors, setShowErrors] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        // TODO TODO TODO TODO TODO
        // write date validation
        setValidationErrors(errors);
    }, [date, description]);


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validationErrors.length) return setShowErrors(true);



    }

    const now = new Date();

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
                {/* <label htmlFor='date'>Date</label>
                <input
                    name='date'
                    id='date'
                    type='datetime-local'
                    min={`${now.getFullYear()}-${now.getMonth()}-${now.getDay() + 1}`}
                    onChange={(e) => setDate(() => e.target.value)}
                    value={date}
                /> */}


                <label htmlFor='date'>Date</label>
                <input
                    name='date'
                    id='date'
                    type='date'
                    min={`${now.getFullYear()}-${now.getMonth()}-${now.getDay() + 1}`}
                    onChange={(e) => setDate(() => e.target.value)}
                    value={date}
                />
                <label htmlFor='startTime'>Start Time</label>
                <input
                    name='startTime'
                    id='startTime'
                    type='time'
                    // max={`${now.getFullYear()}-${now.getMonth()}=${now.getDay() + 1}`}
                    onChange={(e) => setStartTime(() => e.target.value)}
                    value={date}
                />


                <label htmlFor='endTime'>End Time</label>
                <input
                    name='endTime'
                    id='endTime'
                    type='time'
                    // min={`${now.getFullYear()}-${now.getMonth()}=${now.getDay() + 1}`}
                    onChange={(e) => setEndTime(() => e.target.value)}
                    value={date}
                />

                <label htmlFor='description'>Description</label>
                <textarea
                    name='description'
                    id='description'
                    type='text'
                    onChange={(e) => setDescription(() => e.target.value)}
                    value={description}
                />

                <button>Book Artist</button>
            </form>
        </>
    );
}

export default BookingForm;
