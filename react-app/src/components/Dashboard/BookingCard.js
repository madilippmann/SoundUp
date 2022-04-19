import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookingModalPopup from './BookingModal/BookingModalPopup.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const BookingCard = ({ booking, type }) => {

    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()

    const formatDate = (date) => {

        let formatted = String(date).split(' ').slice(1, 4)
        formatted[1] = `${formatted[1]},`
        formatted = formatted.join(' ')
        return formatted
    }

    const formatTime = (time) => {
        let formatted = time.toLocaleString().split(' ')
        return `${formatted[1].split(':').slice(0, 2).join(':')} ${formatted[2]}`
    }

    useEffect(() => {
        setDate(formatDate(new Date(booking.start_date_time)))
        setStartTime(formatTime(new Date(booking.start_date_time)))
        setEndTime(formatTime(new Date(booking.end_date_time)))
    }, [])
    // useEffect(() => {
    //     console.log(Date.parse(booking.created_at) - (1000 * (60 * 5)) < Date.parse(new Date()))
    //     console.log(Date.parse(booking.created_at))
    //     console.log(Date.parse(new Date()))
    // })

    return (
        <>
            {/* <div key={booking.id}>
                <p>{booking.artist_id}</p>
                <p>{new Date(booking.start_date_time).toLocaleString()}</p>
                <p>{new Date(booking.end_date_time).toLocaleString()}</p>
            </div> */}
            <button className='booking__card' type='button' onClick={() => setShowModal(() => true)}>
                <div id='artist__card'>
                    <div id='artist__image'>
                        <img src={booking.artist.profile_image_url} alt={`${booking.artist.name}'s profile picture`} />
                    </div>

                    <div id='booking___info-container'>
                        <div>
                            <h4 id='dashboard__booking__title'>{booking.artist.name}</h4>

                            <div id='booking__date-and-time'>
                                {/* <p>Date</p> */}
                                <p className='less-margin'><span id='booking__date'>Date:</span> {date}</p>
                                {/* <p>Time</p> */}
                                <p className='less-margin'><span id='booking__time'>Time:</span> {startTime} - {endTime}</p>
                            </div>

                        </div>

                        <div id='booking-confirmed__container'>
                            {Date.parse(booking.created_at) < Date.parse(new Date()) - (1000 * (60 * 5)) ?
                                <>
                                    <FontAwesomeIcon icon={faCircleCheck} id='booking-confirmed__icon' />
                                    <span>Booking Confirmed</span>
                                </>
                                :
                                <>
                                    <FontAwesomeIcon icon={faCircleXmark} id='booking-unconfirmed__icon' />
                                    <span>Booking Unconfirmed</span>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </button>

            {showModal && (
                <BookingModalPopup booking={booking} showModal={showModal} setShowModal={setShowModal} type={type} />
            )}
        </>
    );
}

export default BookingCard;
