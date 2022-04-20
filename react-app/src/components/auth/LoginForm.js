import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';

import './auth.css';

const LoginForm = ({ setShowModal }) => {
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(['Invalid login credentials']);
      return
    }
    setShowModal(() => false)
    return history.push('/')
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='auth__outer-container'>
      <form onSubmit={onLogin}>
        <h2 className='auth__title'>Log In</h2>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='auth__input-container'>
          <label className='auth__label' htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
            className='auth__input'

          />
        </div>
        <div className='auth__input-container'>
          <label className='auth__label' htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
            className='auth__input'

          />
          <button id='auth__button' className='extra-top-padding' type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
