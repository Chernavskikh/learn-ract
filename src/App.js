import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import Hrefs from './components/Hrefs';
import Input from './components/Input';

class App extends Component {
  getText() {
    return 'text';
  }

  render() {
    return (
      <div className="App">
        <NameList />
        <hr/>
        <Hrefs />
        <hr/>
        <Input />
      </div>
    );
  }
}

export default App;
