import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';

class App extends Component {
  getText() {
    return 'text';
  }

  render() {
    return (
      <div className="App">
        <NameList />
      </div>
    );
  }
}

export default App;
