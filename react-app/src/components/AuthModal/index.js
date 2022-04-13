import React from 'react';
import ReactDOM from 'react-dom';
import './AuthModal.css'
const Modal = ({ children, closeModal }) => {

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal_background" onClick={closeModal}></div>
            <div id="modal_content">
                {children}
            </div>
        </div>,
        document.getElementById('portal'))
}


export default Modal;
