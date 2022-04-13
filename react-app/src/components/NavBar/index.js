
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import Modal from '../AuthModal';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm';
import AuthModalPopup from '../AuthModal/AuthModalPopup';

const NavBar = ({ sessionUser }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      {sessionUser &&
        <nav>
          <ul>
            <li>
              <NavLink to='/home' exact={true} activeClassName='active'>
                Explore Artists
              </NavLink>
            </li>
            <li>
              <NavLink to='/dashboard' exact={true} activeClassName='active'>
                Dashboard
              </NavLink>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </nav>
      }


      {!sessionUser &&
        <>
          <nav>
            <ul>

              <li>
                <button type='button' onClick={() => setShowSignupModal(true)}>
                  Signup
                </button>
                {setShowSignupModal && (
                  <AuthModalPopup type='signup' />
                )}
              </li>
              <li>
                <button type='button' onClick={() => setShowLoginModal(true)}>
                  Login
                </button>
                {setShowLoginModal && (
                  <AuthModalPopup type='login' />
                )}
              </li>
            </ul>
          </nav>
        </>
      }
    </>
  );
}

export default NavBar;
