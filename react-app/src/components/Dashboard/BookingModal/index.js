import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as userActions from '../../../store/session'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';

import BookingForm from '../../Artist/BookingForm/index.js';
import EditBookingForm from './EditBookingForm';

const BookingModal = ({ booking, setShowModal }) => {
    const dispatch = useDispatch();

    const [editBooking, setEditBooking] = useState(false);

    const deleteBooking = async () => {
        await dispatch(userActions.removeBooking(booking))
    }


    return (
        <>
            {/* {!editBooking &&
                <div>
                    <button type='button' onClick={() => setShowModal(() => false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <div>
                        <button type='button' onClick={() => setEditBooking(true)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button type='button' onClick={deleteBooking}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                    <div key={booking.id}>
                        <p>{booking.artist.name}</p>
                        <p>{new Date(booking.start_date_time).toLocaleString()}</p>
                        <p>{new Date(booking.end_date_time).toLocaleString()}</p>
                        <p>{booking.description}</p>
                    </div>
                </div>
            } */}

            {/* {editBooking &&  */}

            <EditBookingForm parent={booking} setShowModal={setShowModal} />


        </>
    );
}

export default BookingModal;
