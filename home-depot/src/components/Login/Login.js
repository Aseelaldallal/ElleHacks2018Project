// React
import React from 'react';
// Images
import Apron from '../../assets/images/apron.png';
// Components
import Button from '../UI/Button/Button';
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
        <h1> DEPOT CLASH </h1>
      </div>
    </div>
  );
};

export default Login;
