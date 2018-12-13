import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controllerwillreceiveprops from './components/Willreceiveprops/'
import FunctionAsProp from './components/PassCallbackAsProp/'

class App extends Component {
  render() {
    return (
      <div className="App">
        First line of the page
        <Controllerwillreceiveprops   />
        <FunctionAsProp />
      </div>
    );
  }
}

export default App;
