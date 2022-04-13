// import { faImage } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Modal from '.';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';


const AuthModalPopup = ({ type }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const root = document.getElementById('root');
        // const navbar = document.getElementById('navbar');
        // const navBackground = document.getElementById('nav-background')
        // const footer = document.getElementById('footer');
        // const footerBackground = document.getElementById('footer-background');
        // const feedPageBody = document.getElementById('all-posts');
        // const profilePageBody = document.getElementById('profile-page');
        if (showModal) {
            // NOTE: blurring the root element will cause the navbar to move positions
            root.classList.add('blur');

            // navbar.classList.add('blur');
            // navBackground.classList.remove('hidden');

            // footer.classList.add('blur');
            // footerBackground.classList.remove('hidden');

            // feedPageBody?.classList.add('blur');
            // profilePageBody?.classList.add('blur');
        }

        return () => {
            root.classList.remove('blur')
            // navbar.classList.remove('blur');
            // navBackground.classList.add('hidden');

            // footer.classList.remove('blur');
            // footerBackground.classList.add('hidden');

            // feedPageBody?.classList.remove('blur');
            // profilePageBody?.classList.remove('blur');
        }
    }, [showModal])

    return (
        <>
            {type === 'login' && (
                <Modal closeModal={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}

            {type === 'signup' && (
                <Modal closeModal={() => setShowModal(false)} >
                    <SignUpForm />
                </Modal>
            )}
        </>
    );
}

export default AuthModalPopup;
