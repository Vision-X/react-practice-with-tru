import React, { Component, Fragment } from 'react';

class Hero extends Component {

  _onClick = (event) => {
    event.preventDefault();
    if (event.target.tagName === 'H2') {
      let myH2 = document.querySelector('.myH2');
      if (myH2.style.color === 'green') {
        myH2.style.color = 'white';
      } else {
        myH2.style.color = 'green';
      }
    }
  }

  render() {
    const { data, inputText } = this.props;
    return (
      <section className="hero-section" onClick={this._onClick}>
        <h2 className="myH2">Tumble Roll</h2>
        <p>The hot new app for learning gymnastics</p>
        <button type="button">PUSH</button>
        <p>{data.inputText}</p>
        <p>{data.a}</p>
        <p>{data.b}</p>
      </section>
    )
  }
}

export default Hero;
