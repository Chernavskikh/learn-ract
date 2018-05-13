import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Main from './pages/main.js';
import Two from './pages/two.js';

class App extends Component {
  render() {
    return (
    <div>
      <nav className="navbar">
        <ul className="nav">
          <li><Link to="/main">Main</Link></li>
          <li><Link to="/two">Two</Link></li>
        </ul>
      </nav>

      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/main" component={Main} />
        <Route path="/two" component={Two} />
      </Switch>
    </div>
    );
  }
}

export default App;
