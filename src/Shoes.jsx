import React, { Component, Fragment } from 'react';

export default class Shoes extends Component {

  _conditionalRender = () => {
    if (this.props.shoeData) {
      return (
        <section>
          <ul>
          {this.props.shoeData.map(shoe => {
            return (
              <li key={Math.random(new Date())}><p>{shoe.name}</p></li>
            )
          })}
          </ul>
        </section>
      )
    } else {
      return (
        <section>
          <p>Waiting on the data...</p>
        </section>
      )
    }
  }

  render() {
    return (
      <Fragment>
        {this._conditionalRender()}
      </Fragment>
    )
  }
}
