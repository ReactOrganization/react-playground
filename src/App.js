import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controllerwillreceiveprops from './components/Willreceiveprops/'
import FunctionAsProp from './components/PassCallbackAsProp/'
import ShouldComponentUpdateControler from './components/ShouldComponentUpdate/'
import MagicEightBall from './components/MagicEightBall/'
import ConditionalRendering from './components/ConditionalRendering/'
import TernaryConditional from './components/TernaryConditional/'

class App extends Component {
  render() {
    return (
      <div className="App">
        First line of the page
        <FunctionAsProp />
        <Controllerwillreceiveprops   />
        <ShouldComponentUpdateControler />
        <MagicEightBall />
        <ConditionalRendering />
        <TernaryConditional />
      </div>
    );
  }
}

export default App;
