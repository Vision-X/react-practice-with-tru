import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        a: 'a',
        b: 'b'
      },
      inputText: ''
    };
  }

  _onChange = () => {
    let userInput = document.querySelector('.text-input').value;
    this.setState({ inputText: userInput}, this._logState);
  }

  _logState = () => {
    console.log(this.state.inputText)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hero data={this.state}/>
        <input
          onChange={this._onChange}
          class="text-input"
          type="text"
          name="word"
          placeholder="enter some text!"
        />
      </div>
    );
  }
}

export default App;
