import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as userActions from '../../store/session'
import Modal from '../Modal';
import BookingModal from '.';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';


const BookingModalPopup = ({ booking, showModal, setShowModal }) => {

    useEffect(() => {
        const root = document.getElementById('root');

        if (showModal) {
            root.classList.add('blur');
        }

        return () => {
            root.classList.remove('blur')
        }
    }, [showModal])

    return (
        <>
            <Modal closeModal={() => setShowModal(false)}>
                <BookingModal booking={booking} setShowModal={setShowModal} />
            </Modal>
        </>
    );
}

export default BookingModalPopup;
