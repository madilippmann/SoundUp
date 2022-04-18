import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookingModalPopup from './BookingModal/BookingModalPopup.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const BookingCard = ({ booking, type }) => {

    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        console.log(Date.parse(booking.created_at) - (1000 * (60 * 5)) < Date.parse(new Date()))
        console.log(Date.parse(booking.created_at))
        console.log(Date.parse(new Date()))
    })
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

                    <div id='artist___info-container'>
                        <h4 id='artist__card-title'>{booking.artist.name}</h4>

                        <div>
                            <p>{new Date(booking.start_date_time).toLocaleString()}</p>
                            <p>{new Date(booking.end_date_time).toLocaleString()}</p>
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
