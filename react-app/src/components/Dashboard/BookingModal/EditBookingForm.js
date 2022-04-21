import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import DatePicker from 'sassy-datepicker';

import { times } from '../../../utils';
import * as userActions from '../../../store/session.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { formatDate, formatTime } from "../../../utils";


import './EditBooking.css';

const EditBookingForm = ({ parent, setShowModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    const [parsedDate, setParsedDate] = useState();
    const [startDateTime, setStartDateTime] = useState();
    const [endDateTime, setEndDateTime] = useState();

    const [description, setDescription] = useState('');
    const [bookingDuration, setBookingDuration] = useState(null);

    const [showErrors, setShowErrors] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);


    useEffect(() => {
        if (parent.start_date_time) {
            setDate(() => new Date(parent.start_date_time))
            setStartTime(() => formatTime(new Date(parent.start_date_time)))
            setEndTime(() => formatTime(new Date(parent.end_date_time)))
            setDescription(() => parent.description)
            setIsLoaded(() => true)
        }

    }, [])

    useEffect(() => {
        if (showConfirm) {
            const duration = setTimeout(() => {
                setShowConfirm(false)
            }, [5000])

            return () => { clearTimeout(duration) }
        }
    }, [showConfirm])


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
        setBookingDuration((endDateTime - startDateTime) / (60 * 60 * 1000))
    }, [endDateTime, startDateTime])


    useEffect(() => {

        const errors = [];

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
                booking_id: parent.id,
                artist_id: parent.artist.id,
                start_date_time: startDateTime,
                end_date_time: endDateTime,
                description,
            }

            res = await dispatch(userActions.editBooking(booking))

            if (res.errors) {
                res.errors.forEach(error => {
                    setValidationErrors((prev) => [...prev, error.split(' : ')[1]])
                })
                console.log('VALIDATION ERRORS: ', validationErrors)
                return setShowErrors(true)
            } else {
                setShowConfirm(true)
                return history.push('/dashboard')
            }
        }

    }


    const deleteBooking = async () => {
        if (window.confirm('Are you sure you want to cancel this booking?')) {
            await dispatch(userActions.removeBooking(parent))
        }
    }

    return !isLoaded ? null : (
        <div id='edit-booking__container'>
            <div className='space-between'>
                <button id='edit-booking__back-button' type='button' onClick={() => setShowModal(() => false)}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    Back
                </button>
                <button id='edit-booking__cancel-button' type='button' onClick={deleteBooking}>Cancel Booking</button>
            </div>
            <h3 id='edit-booking__title'>Edit Booking</h3>
            <form
                id='edit-booking__form'
                onSubmit={handleSubmit}
            >


                <div id='booking-form__date'>
                    <DatePicker
                        onChange={(e) => { setDate(e) }}
                        selected={date}
                        minDate={new Date()}
                    />
                </div>

                <div id='edit-booking__times-container'>
                    <div className='edit-booking__times'>
                        <div className='booking-form__time'>
                            <label htmlFor='startTime'>Start: </label>
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

                        <div className='booking-form__time'>
                            <label htmlFor='endTime'>End: </label>
                            <div className='flex-row ' id='time__search-input' >
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
                    </div>

                </div>

                <div id='description__container' className='smaller-textarea'>
                    <label htmlFor='description'>Event Description</label>
                    <textarea
                        name='description'
                        id='description'
                        type='text'
                        onChange={(e) => setDescription(() => e.target.value)}
                        value={description}
                    />

                </div>
                <div className='center'>
                    {/* TODO TODO TODO FIX the booking duration and add it back in */}
                    {/* {bookingDuration && parent.artist.rate * bookingDuration !== NaN && parent.artist.rate * bookingDuration > 0 &&
                        <p id='edit-booking__total'>New Total: ${(parent.artist.rate * bookingDuration).toFixed(2)}</p>
                    } */}
                    {!showErrors ? null : (
                        <div className='error-container booking' style={{ paddingBottom: '10px' }}>
                            {validationErrors.map(err => (
                                <div key={err} className='error__list-item'>{err}</div>
                            ))}
                        </div>
                    )}
                    <button id='booking__button'>Update Booking</button>
                    {showConfirm && <p style={{ color: 'green' }}>
                        <FontAwesomeIcon icon={faCheck} style={{ paddingRight: '10px' }} />
                        Updated Booking request sent to {parent.artist.name}!
                    </p>}

                </div>
            </form>

        </div >
    );
}

export default EditBookingForm;
