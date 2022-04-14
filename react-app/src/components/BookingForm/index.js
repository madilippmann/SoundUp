import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session.js';

const BookingForm = ({ artist }) => {
    const dispatch = useDispatch()
    const [date, setDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [description, setDescription] = useState('');

    const [showErrors, setShowErrors] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const startDateTime = new Date(`${date} ${startTime}`)
        const endDateTime = new Date(`${date} ${endTime}`)

        const errors = [];
        // TODO TODO TODO TODO TODO
        // console.log('Start Time: ', Date.parse(endDateTime))
        // console.log('End Time: ', Date.parse(startDateTime))
        if (!date) {
            errors.push('Please enter valid date.')
        }
        if (!startTime) {
            errors.push('Please enter valid start time.')
        }
        if (!endTime) {
            errors.push('Please enter valid end time.')
        }

        if (Date.parse(endDateTime) - Date.parse(startDateTime) <= 0) {
            errors.push('Invalid time range.')
        }

        setValidationErrors(errors);
    }, [date, startTime, endTime, description]);




    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validationErrors.length) return setShowErrors(true);

        const startDateTime = new Date(`${date} ${startTime}`)
        const endDateTime = new Date(`${date} ${endTime}`)
        console.log(artist.id)
        const booking = {
            artist_id: artist.id,
            start_date_time: startDateTime,
            end_date_time: endDateTime,
            description,
        }


        const res = await dispatch(sessionActions.createBooking(booking))
        if (res) {
            const data = await res.json()
            if (data) {
                setDate(() => null)
                setStartTime(() => null)
                setEndTime(() => null)
            }

        }

        validationErrors.push('An error occured. Please try again.')
        return setShowErrors(true)

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
                    value={startTime}
                />


                <label htmlFor='endTime'>End Time</label>
                <input
                    name='endTime'
                    id='endTime'
                    type='time'
                    // min={`${now.getFullYear()}-${now.getMonth()}=${now.getDay() + 1}`}
                    onChange={(e) => setEndTime(() => e.target.value)}
                    value={endTime}
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
