// React
import React from 'react';
// Styling
import classes from './Button.css';

const Button = props => {
  return <button className={classes.button}> {props.label} </button>;
};

export default Button;
