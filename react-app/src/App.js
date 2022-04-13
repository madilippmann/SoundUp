import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';

// import Messages from './components/Messages';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Splash from './components/Splash';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

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
        <Route path='/' exact={true}>
          <Splash />
        </Route>

        <ProtectedRoute path='/home' exact={true}>
          <Home />
        </ProtectedRoute>

        <ProtectedRoute path='/dashboard' exact={true}>
          <Dashboard />
        </ProtectedRoute>

        <ProtectedRoute path='/' exact={true} >
          <p>In construction</p>
          {/* <Home /> */}
        </ProtectedRoute>

        <ProtectedRoute path='/artists/:artistId' exact={true}>
          <p>In construction</p>
          {/* <ArtistPage /> */}
        </ProtectedRoute>

        <ProtectedRoute path='/messages' exact={true}>
          <p>In construction</p>
          {/* <Messages /> */}
        </ProtectedRoute>

        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
