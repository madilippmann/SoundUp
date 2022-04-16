import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


import * as userActions from '../../store/session.js';

const BookingForm = ({ parent }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [date, setDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [description, setDescription] = useState('');

    const [showErrors, setShowErrors] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);



    const extractDate = (dateTime) => {
        let date = new Date(dateTime)

        const year = date.getFullYear()
        const month = date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
        const day = dateTime.split(' ')[1]

        return `${year}-${month}-${day}`
    }

    const extractTime = (dateTime) => {
        const date = new Date(dateTime);
        const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
        const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`

        return `${hours}:${minutes}`

    }

    useEffect(() => {
        if (parent.start_date_time) {
            setDate(() => extractDate(parent.start_date_time))
            setStartTime(() => extractTime(parent.start_date_time))
            setEndTime(() => extractTime(parent.end_date_time))
        }
    }, [])

    useEffect(() => {
        const startDateTime = new Date(`${date} ${startTime}`)
        const endDateTime = new Date(`${date} ${endTime}`)

        const errors = [];
        // TODO TODO TODO TODO TODO

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

        let res;

        if (parent.start_date_time) {
            const booking = {
                id: parent.id,
                artist_id: parent.id,
                start_date_time: Date.parse(startDateTime),
                end_date_time: Date.parse(endDateTime),
                description,
            }

            // parent.start_date_time = startDateTime
            // parent.end_date_time = endDateTime
            // parent.description = description
            res = await dispatch(userActions.editBooking(booking))
            history.push('/dashboard')
            // FIX FIX FIX navigate to other modal page rather than refreshing

            window.location.reload(false)
        } else {
            const booking = {
                artist_id: parent.id,
                start_date_time: Date.parse(startDateTime),
                end_date_time: Date.parse(endDateTime),
                description,
            }

            res = await dispatch(userActions.createBooking(booking))

            if (res) {
                setDate(() => undefined)
                setStartTime(() => undefined)
                setEndTime(() => undefined)
                return history.push('/dashboard')
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
            {/* TODO TODO TODO add onClick that refs backt to booking modal component */}
            {parent.start_date_time && <button type='button' >Cancel</button>}
        </>
    );
}

export default BookingForm;
