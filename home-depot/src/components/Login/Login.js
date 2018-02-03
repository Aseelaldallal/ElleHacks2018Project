// React
import React from 'react';
// Images
import Apron from '../../assets/images/apron.png';
// Components
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
// Styling
import classes from './Login.css';

const Login = () => {
  return (
    <div className={classes.loginPage}>
      <div className={classes.imageBox}>
        <img src={Apron} alt="apron" />
      </div>
      <div className={classes.spacer} />
      <div className={classes.loginContainer}>
        <h1> HOME STORE CHALLENGE </h1>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div>
          <input type="checkbox" />
          <label>Remember Me</label>
        </div>
        <Button label="LOGIN" />
      </div>
    </div>
  );
};

export default Login;
