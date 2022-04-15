
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import AuthModalPopup from '../AuthModal/AuthModalPopup';

const NavBar = () => {
  // const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      {sessionUser &&
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact={true} activeClassName='active'>
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
                {showSignupModal && (
                  <AuthModalPopup type='signup' setShowModal={setShowSignupModal} showModal={showSignupModal} />
                )}
              </li>
              <li>
                <button type='button' onClick={() => { setShowLoginModal(true) }}>
                  Login
                </button>
                {showLoginModal && (
                  <AuthModalPopup type='login' setShowModal={setShowLoginModal} showModal={showLoginModal} />
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
