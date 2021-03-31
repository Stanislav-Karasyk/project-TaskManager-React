import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations.js';
import Button from '../../shared/button/Button.jsx';
import styles from './LoginForm.module.css';

import Background from '../background/Background.jsx';
import { Link } from 'react-router-dom';

const initialState = {
  email: 'test123@mail.com',
  password: 'test123',
};
export default function LoginForm() {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(user));
    setUser(initialState);
  };

  return (
    <div className={styles.wrapper}>
      <Background />

      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Sign in</h1>
        <label className={styles.label}>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="E-mail"
          />
        </label>

        <label className={styles.label}>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={styles.input}
            placeholder="Password"
          />
        </label>

        <Button>Sign in</Button>
        <p className={styles.textUnderbutton}>
          Don't yet have an account?
          <Link to="/registration" className={styles.underlined}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}