import React from 'react';
//import ReactDOM from 'react-dom';
import classes from './navbar.css';
import logo from '../../assets/img/homeDepotLogo.png';

export default class NavComponent extends React.Component{
  render() {
    return (
      <div>
      <ul>
        <li><img src={logo} /></li>
        <li><a href="#">EN/FR</a></li>
        <li><a href="#">Register</a></li>
      </ul>
      </div>
    );
  }
};


