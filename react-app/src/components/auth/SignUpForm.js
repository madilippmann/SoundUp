import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp, login } from '../../store/session';

import './auth.css';

const SignUpForm = ({ setShowModal }) => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }

    setShowModal(() => false)
    return history.push('/')

  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }


  const demoLogin = async () => {
    await dispatch(login('demo@aa.io', 'password'));

    setShowModal(() => false)
    return history.push('/')
  }

  return (
    <div className='auth__outer-container'>
      <form onSubmit={onSignUp}>
        <h2 className='auth__title' >New Account</h2>

        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>

        <div className='auth__input-container'>
          <label className='auth__label'>Username</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            className='auth__input'
          ></input>
        </div>

        <div className='auth__input-container'>
          <label className='auth__label'>Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            className='auth__input'
          ></input>
        </div>

        <div className='auth__input-container'>
          <label className='auth__label'>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            className='auth__input'
          ></input>
        </div>

        <div className='auth__input-container'>
          <label className='auth__label'>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className='auth__input'
          ></input>
        </div>
        <button id='auth__button' type='submit'>SIGNUP</button>
      </form>
      <div id='demo__button__container'>
        Don't want to make a account?
        <button id='demo__button' type='button' onClick={demoLogin}>Sign in with demo</button>
      </div>
    </div >
  );
};

export default SignUpForm;
