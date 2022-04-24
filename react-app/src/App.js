import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UnprotectedRoute from './components/auth/UnprotectedRoute';
import { authenticate } from './store/session';

// import Messages from './components/Messages';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Splash from './components/Splash';
import Artist from './components/Artist';
import Footer from './components/Footer';


function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();
	// const sessionUser = useSelector(state => state.session.user)

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);

		})();
	}, [dispatch]);

	if (!loaded) {
		return null;
	}

	return (

		<BrowserRouter>
			<NavBar />
			<Switch>
				<UnprotectedRoute path='/auth' exact={true}>
					<div className='splash body'>
						<Splash />
					</div>
				</UnprotectedRoute>

				<ProtectedRoute path='/' exact={true}>
					<div className='home body'>
						<Home />
					</div>
				</ProtectedRoute>

				<ProtectedRoute path='/dashboard' exact={true}>
					<div className='dashboard body'>
						<Dashboard />
					</div>
				</ProtectedRoute>

				<ProtectedRoute path='/artists/:artistId' exact={true}>
					<div className='artist body'>
						<Artist />
					</div>
				</ProtectedRoute>


				{/* Handles nonexistent routes for both protected and unprotected routes */}
				<UnprotectedRoute path='/' >
					<Redirect to='/auth' />
				</UnprotectedRoute>

			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
