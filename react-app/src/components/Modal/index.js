import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ children, closeModal, className }) => {

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal_background" onClick={closeModal}></div>
            <div id="modal_content" className={className}>
                {children}
            </div>
        </div>,
        document.getElementById('portal'))
}


export default Modal;
