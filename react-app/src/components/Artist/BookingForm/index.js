import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import DatePicker from 'sassy-datepicker';

import { times } from '../../../utils';
import * as userActions from '../../../store/session.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import './BookingForm.css'

const BookingForm = ({ parent }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    const [parsedStartTime, setParsedStartTime] = useState();
    const [parsedEndTime, setParsedEndTime] = useState();
    const [parsedDate, setParsedDate] = useState();

    const [startDateTime, setStartDateTime] = useState();
    const [endDateTime, setEndDateTime] = useState();

    const [description, setDescription] = useState('');
    const [bookingDuration, setBookingDuration] = useState(null);

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
        // DATE
        console.log('DATE ', date)
        const adjustedDate = String(date).split(' ').slice(0, 4).join(' ');
        setParsedDate(() => adjustedDate);


        //  START TIME
        let adjustedStartTime;

        if (startTime) {
            adjustedStartTime = startTime.split(' ')

            if (adjustedStartTime[1] === 'AM') {
                adjustedStartTime = `0${adjustedStartTime[0]}`
            } else {
                let [hours, minutes] = adjustedStartTime[0].split(':')
                hours = Number(hours) + 12
                adjustedStartTime = `${hours}:${minutes}`
            }

        }

        setStartDateTime(Date.parse((`${adjustedDate} ${adjustedStartTime}`)))

        // END TIME
        let adjustedEndTime;

        if (endTime) {
            adjustedEndTime = endTime.split(' ')

            if (adjustedEndTime[1] === 'AM') {
                adjustedEndTime = `0${adjustedEndTime[0]}`
            } else {
                let [hours, minutes] = adjustedEndTime[0].split(':')
                hours = Number(hours) + 12
                adjustedEndTime = `${hours}:${minutes}`
            }
        }

        setEndDateTime(Date.parse((`${adjustedDate} ${adjustedEndTime}`)))


    }, [date, startTime, endTime])




    useEffect(() => {

        const errors = [];
        // TODO TODO TODO TODO TODO

        if (!startDateTime) {
            errors.push('Please enter a valid start time.')
        }
        if (!endDateTime) {
            errors.push('Please enter a valid end time.')
        }

        if (endDateTime <= startDateTime) {
            errors.push('Invalid time range.')
        }
        if (Date.parse(new Date()) >= endDateTime) {
            errors.push('Please select future date.')
        }


        console.log(errors)
        setValidationErrors(errors);
    }, [parsedDate, endDateTime, startDateTime, description]);




    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validationErrors.length) return setShowErrors(true);


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
        <div id='booking__container'>
            <h3 id='booking__title'>Book Artist</h3>



            <form onSubmit={handleSubmit}>

                {/* <label htmlFor='date'>Date</label>
                <input
                    name='date'
                    id='date'
                    type='date'
                    min={`${now.getFullYear()}-${now.getMonth()}-${now.getDay() + 1}`}
                    onChange={(e) => setDate(() => e.target.value)}
                    value={date}
                /> */}
                <div id='booking__date'>
                    <DatePicker onChange={(e) => setDate(e)} selected={date} value={date} />
                </div>

                {/* <input
                    name='startTime'
                    id='startTime'
                    type='time'
                    // max={`${now.getFullYear()}-${now.getMonth()}=${now.getDay() + 1}`}
                    onChange={(e) => setStartTime(() => e.target.value)}
                    value={startTime}
                /> */}
                <div id='booking__start-time'>
                    <label htmlFor='startTime'>Start Time: </label>
                    <div className='flex-row' id='time__search-input' >
                        <FontAwesomeIcon icon={faClock} />
                        <select
                            // id='select-time'
                            className='input-no-style'
                            type='select'
                            onChange={(e) => setStartTime(() => e.target.value)}

                            value={startTime}
                        >
                            <option value='' disabled selected>select time</option>
                            {times.map(time => <option value={time}>{time}</option>)}
                        </select>
                    </div>

                </div>

                <div id='booking__end-time'>
                    <label htmlFor='endTime'>End Time: </label>
                    <div className='flex-row' id='time__search-input' >
                        <FontAwesomeIcon icon={faClock} />
                        <select
                            // id='select-time'
                            className='input-no-style'
                            type='select'
                            onChange={(e) => setEndTime(() => e.target.value)}

                            value={endTime}
                        >
                            <option value='' disabled selected>select time</option>
                            {times.map(time => <option value={time}>{time}</option>)}
                        </select>
                    </div>
                </div>
                {/* <input
                    name='endTime'
                    id='endTime'
                    type='time'
                    // min={`${now.getFullYear()}-${now.getMonth()}=${now.getDay() + 1}`}
                    onChange={(e) => setEndTime(() => e.target.value)}
                    value={endTime}
                /> */}
                <div id='description__container'>
                    <label htmlFor='description'>Event Description</label>
                    <textarea
                        name='description'
                        id='description'
                        type='text'
                        onChange={(e) => setDescription(() => e.target.value)}
                        value={description}
                    />

                </div>
                {bookingDuration &&
                    <p>Total: {parent.rate * bookingDuration}</p>
                }

                {!showErrors ? null : (
                    <div className='error-container booking'>
                        {validationErrors.map(err => (
                            <div key={err} className='error__list-item'>{err}</div>
                        ))}
                    </div>
                )}
                <button id='booking__button'>Book Artist</button>
            </form>
            {/* TODO TODO TODO add onClick that refs backt to booking modal component */}
            {parent.start_date_time && <button type='button' >Cancel</button>}
        </div>
    );
}

export default BookingForm;
