import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';

class App extends Component {

  // Header = () => {
  //   return (
  //     <header>
  //       <h1>TumbleRoll.com</h1>
  //       <nav>
  //         <ul>
  //           <li><a href="">Home</a></li>
  //           <li><a href="">About</a></li>
  //           <li><a href="">Contact</a></li>
  //         </ul>
  //       </nav>
  //     </header>
  //   )
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        {/*<Hero />*/}
      </div>
    );
  }
}

export default App;
