import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controllerwillreceiveprops from './components/Willreceiveprops/'

class App extends Component {
  render() {
    return (
      <div className="App">
        First line of the page
        <Controllerwillreceiveprops   />
      </div>
    );
  }
}

export default App;
