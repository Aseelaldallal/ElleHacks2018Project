import React from 'react';
//import ReactDOM from 'react-dom';
import classes from './navbar.css';


export default class NavComponent extends React.Component{
  render() {
    return (
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>
    );
  }
};


