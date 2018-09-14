import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>TumbleRoll.com</h1>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }
};
