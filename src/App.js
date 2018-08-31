import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import Saved from './containers/Saved';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </div>
      </Router> 
    );
  }
}

export default App;
