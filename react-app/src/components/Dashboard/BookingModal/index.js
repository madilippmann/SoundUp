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
            <EditBookingForm parent={booking} setShowModal={setShowModal} />
        </>
    );
}

export default BookingModal;
