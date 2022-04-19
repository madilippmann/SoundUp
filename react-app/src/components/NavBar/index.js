
import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import AuthModalPopup from '../AuthModal/AuthModalPopup';

import './NavBar.css'
import logo from '../../static/main-logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const NavBar = () => {
	// const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user)
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [showSignupModal, setShowSignupModal] = useState(false);

	return (
		<>
			{sessionUser &&
				<nav className='navbar'>
					<div className='navbar-container'>
						<div className='nav__left'>
							<Link to='/'>
								<div className="logo-wrapper">
									<img src={logo}
										alt="logo"
										className="nav__logo"
									/>
								</div>
							</Link>
							<div id='location__container'>
								<FontAwesomeIcon id='location__icon' icon={faLocationDot} />
								<span>San Francisco Bay Area</span>
							</div>
						</div>

						<div className="nav__right">
							<div className="nav__buttons">

								<NavLink to='/' exact={true} activeClassName='active'>
									<div className='nav-icon__container'>
										<FontAwesomeIcon icon={faCompass} className='nav-icon' />
										<span className='nav-title'>Explore Artists</span>
									</div>
								</NavLink>

								<NavLink to='/dashboard' exact={true} activeClassName='active'>
									<div className='nav-icon__container'>
										<FontAwesomeIcon icon={faCalendar} className='nav-icon' />
										<span className='nav-title'>Dashboard</span>
									</div>
								</NavLink>

								<div className='nav-icon__container'>
									<LogoutButton />
								</div>

							</div>
						</div>
					</div>
				</nav>
			}


			{!sessionUser &&
				<>
					<nav className='navbar'>
						<div className='navbar-container'>
							<div className='nav__left'>
								<Link to='/'>
									<div className="logo-wrapper">
										<img src={logo}
											alt="logo"
											className="nav__logo"
										/>
									</div>
								</Link>
								<div id='location__container'>
									<FontAwesomeIcon id='location__icon' icon={faLocationDot} />
									<span>San Francisco Bay Area</span>
								</div>
							</div>

							<div className="nav__right">

								<div className="nav__buttons">
									<button
										type='button'
										onClick={() => setShowSignupModal(true)}
										id='signup__button'
									>
										Signup
									</button>

									{showSignupModal && (
										<AuthModalPopup type='signup' setShowModal={setShowSignupModal} showModal={showSignupModal} />
									)}

									<button
										type='button'
										onClick={() => { setShowLoginModal(true) }}
										id='login__button'
									>
										Login
									</button>

									{showLoginModal && (
										<AuthModalPopup type='login' setShowModal={setShowLoginModal} showModal={showLoginModal} />
									)}
								</div>
							</div>
						</div>
					</nav>
				</>
			}
		</>
	);
}

export default NavBar;
