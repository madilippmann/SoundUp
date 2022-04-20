import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookingModalPopup from '../BookingModal/BookingModalPopup.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { formatDate, formatTime } from '../../../utils.js';


const BookingCard = ({ booking, type }) => {
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [reviewedArtist, setReviewedArtist] = useState()



    useEffect(() => {
        setDate(formatDate(new Date(booking.start_date_time)))
        setStartTime(formatTime(new Date(booking.start_date_time)))
        setEndTime(formatTime(new Date(booking.end_date_time)))
        setReviewedArtist(sessionUser.reviews.find(review => review.artist.id === booking.artist.id) ? true : false)
    }, [])


    return (
        <>
            {type === 'upcoming' &&
                <>
                    <button className='booking__card' type='button' onClick={() => setShowModal(() => true)}>
                        <div id='artist__card'>
                            <div id='artist__image'>
                                <img src={booking.artist.profile_image_url} alt={`${booking.artist.name}'s profile picture`} />
                            </div>

                            <div id='booking___info-container'>
                                <div>
                                    <h4 id='dashboard__booking__title' className='upcoming'>{booking.artist.name}</h4>

                                    <div id='booking__date-and-time'>
                                        <p className='less-margin'><span id='booking__date'>Date:</span> {date}</p>
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
            }

            {type === 'past' &&
                <>
                    {!reviewedArtist ?
                        <Link to={`/artists/${booking.artist.id}`} className='booking__card'>
                            <div id='artist__card'>
                                <div id='artist__image'>
                                    <img src={booking.artist.profile_image_url} alt={`${booking.artist.name}'s profile picture`} />
                                </div>

                                <div id='booking___info-container'>
                                    <div>
                                        <h4 id='dashboard__booking__title'>{booking.artist.name}</h4>

                                        <div id='booking__date-and-time'>
                                            <p className='less-margin'><span id='booking__date'>Date:</span> {date}</p>
                                            <p className='less-margin'><span id='booking__time'>Time:</span> {startTime} - {endTime}</p>
                                        </div>

                                    </div>

                                    <div id='booking-passed__container'>
                                        <p id='leave-review__message' style={{ margin: '7px 0' }}>Leave {booking.artist.name} a review!</p>
                                        <p style={{ fontStyle: 'italic', marginTop: '0' }}>Event passed</p>
                                    </div>
                                </div>
                            </div>
                        </Link> :
                        <div id='artist__card' className='no-hover'>
                            <div id='artist__image'>
                                <img src={booking.artist.profile_image_url} alt={`${booking.artist.name}'s profile picture`} />
                            </div>

                            <div id='booking___info-container'>
                                <div>
                                    <h4 id='dashboard__booking__title'>{booking.artist.name}</h4>

                                    <div id='booking__date-and-time'>
                                        <p className='less-margin'><span id='booking__date'>Date:</span> {date}</p>
                                        <p className='less-margin'><span id='booking__time'>Time:</span> {startTime} - {endTime}</p>
                                    </div>

                                </div>

                                <div id='booking-passed__container'>
                                    <p style={{ fontStyle: 'italic', marginTop: '40px' }}>Event passed</p>
                                </div>
                            </div>
                        </div>
                    }
                </>

            }
        </>
    );
}

export default BookingCard;
