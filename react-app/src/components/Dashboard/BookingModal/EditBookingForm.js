import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import DatePicker from 'sassy-datepicker';

import { times } from '../../../utils';
import * as userActions from '../../../store/session.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { formatDate, formatTime } from "../../../utils";

const EditBookingForm = ({ parent }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);

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


    useEffect(() => {
        if (parent.start_date_time) {
            console.log('dATE: ', String(new Date(parent.start_date_time)))
            setDate(() => new Date(parent.start_date_time))
            setStartTime(() => formatTime(new Date(parent.start_date_time)))
            setEndTime(() => formatTime(new Date(parent.end_date_time)))
            setIsLoaded(() => true)
        }

    }, [])


    useEffect(() => {
        // DATE
        const adjustedDate = String(date).split(' ').slice(0, 4).join(' ');
        setParsedDate(() => adjustedDate);


        //  START TIME
        let adjustedStartTime;

        if (startTime) {
            adjustedStartTime = startTime.split(' ')

            if (adjustedStartTime[1] === 'AM') {
                if (Number(adjustedStartTime[0].split(':')[0]) === 12) {
                    let [hours, minutes] = adjustedStartTime[0].split(':')
                    adjustedStartTime = `00:${minutes}`

                } else {
                    adjustedStartTime = `0${adjustedStartTime[0]}`
                }
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
                if (Number(adjustedEndTime[0].split(':')[0]) === 12) {
                    let [hours, minutes] = adjustedEndTime[0].split(':')
                    adjustedEndTime = `00:${minutes}`
                } else {
                    adjustedEndTime = `0${adjustedEndTime[0]}`
                }
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
                start_date_time: startDateTime,
                end_date_time: endDateTime,
                description,
            }

            res = await dispatch(userActions.createBooking(booking))
            if (res.errors) {
                res.errors.forEach(error => {
                    setValidationErrors((prev) => [...prev, error.split(' : ')[1]])
                })

                return setShowErrors(true)
            } else {
                setDate(() => undefined)
                setStartTime(() => undefined)
                setEndTime(() => undefined)
                return history.push('/dashboard')
            }
        }


    }

    const now = new Date();

    return !isLoaded ? null : (
        <div id='booking__container'>
            <h3 id='booking__title'>Book Artist</h3>
            <form onSubmit={handleSubmit}>


                <div id='booking__date'>
                    <DatePicker
                        onChange={(e) => { setDate(e); console.log(e) }}
                        selected={date}
                        // value={date}
                        minDate={new Date()}
                    />
                </div>


                <div id='booking__start-time'>
                    <label htmlFor='startTime'>Start Time: </label>
                    <div className='flex-row' id='time__search-input' >
                        <FontAwesomeIcon icon={faClock} />
                        <select
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

export default EditBookingForm;
