import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Shoes from './Shoes';

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

  _fetchShoes = () => {
    let url = "https://webscraper-to-api.firebaseapp.com/output.json"
    let dataGetter = response => {
      let arr = [];
      for (let key in response) {
        arr.push(response[key])
      }
      this.setState({ shoes: arr }, this._logState);
    }
    return fetch(url)
           .then(response => response.json())
           .then(dataGetter)
           .catch(console.error);
  }

  componentDidMount = () => {
    this._fetchShoes();
  }

  _onChange = () => {
    let userInput = document.querySelector('.text-input').value;
    this.setState({ inputText: userInput}, this._logState);
  }

  _logState = () => {
    console.log(this.state.inputText);
    console.log(this.state.shoes);
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
        <Shoes shoeData={this.state.shoes}/>
      </div>
    );
  }
}

export default App;
