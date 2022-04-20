// import { faImage } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Modal from '../Modal';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';


const AuthModalPopup = ({ type, setShowModal, showModal }) => {
    // const [showModal, setShowModal] = useState(false);

    // useEffect(() => {}, [])
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
            {type === 'login' && (
                <Modal closeModal={() => setShowModal(false)} className={'auth__modal'}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}

            {type === 'signup' && (
                <Modal closeModal={() => setShowModal(false)} className={'auth__modal'}>
                    <SignUpForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default AuthModalPopup;
