import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookingModalPopup from '../BookingModal/BookingModalPopup.js'

const BookingCard = ({ booking }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button type='button' onClick={() => setShowModal(() => true)}>
                <div key={booking.id}>
                    <p>{booking.artist_id}</p>
                    <p>{new Date(booking.start_date_time).toLocaleString()}</p>
                    <p>{new Date(booking.end_date_time).toLocaleString()}</p>
                </div>
            </button>

            {showModal && (
                <BookingModalPopup booking={booking} showModal={showModal} setShowModal={setShowModal} />
            )}
        </>
    );
}

export default BookingCard;
