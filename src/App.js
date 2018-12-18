import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Controllerwillreceiveprops from './components/Willreceiveprops/'
import FunctionAsProp from './components/PassCallbackAsProp/'
import ShouldComponentUpdateControler from './components/ShouldComponentUpdate/'
import MagicEightBall from './components/MagicEightBall/'
import ConditionalRendering from './components/ConditionalRendering/'
import TernaryConditional from './components/TernaryConditional/'
import ConditionalProps from './components/ConditionalProps/'
import DynamicallyRenderMap from './components/DynamicallyRenderMap/'

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
        <ConditionalProps />
        <DynamicallyRenderMap />
      </div>
    );
  }
}

export default App;
