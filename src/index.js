import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import About from './About';
import Contact from './Contact';

ReactDOM.render(
  <Router>
    <Fragment>
      <Route exact path="/" component={ App } />
      <Route path="/about" component={ About } />
      <Route path="/contact" component={ Contact } />
    </Fragment>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
