import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>TumbleRoll.com</h1>
        <nav>
          <ul>
            <li><NavLink exact to="/" >Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
};
