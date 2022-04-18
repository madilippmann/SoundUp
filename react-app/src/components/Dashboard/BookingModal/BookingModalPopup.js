import { useEffect } from 'react';

import Modal from '../../Modal'
import BookingModal from '.';

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
