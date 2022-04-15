import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <button onClick={onLogout} className='nav-icon__container no-styling-button'>
      <FontAwesomeIcon icon={faArrowRightFromBracket} className='nav-icon' />
      <span className='nav-title'>Logout</span>
    </button>);
};

export default LogoutButton;
