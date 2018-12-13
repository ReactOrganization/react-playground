import React from 'react';

class Willupdateprops extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line
  componentWillReceiveProps(nextProps) {
     console.log(this.props)
     console.log(nextProps)
  }
   
   componentDidUpdate() {
     console.log("it did updated")
   }

  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controllerwillupdateprops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <h1>componentWillReceiveProps()</h1>
        <p> componentDidUpdate(), and is called immediately after a component re-renders.<br />
            Note that rendering and mounting are considered different things in the component<br />
            lifecycle. When a page first loads, all components are mounted and this is where methods like<br /> 
            componentWillMount() and componentDidMount() are called. After this, as state changes, components re-render themselves.
        </p>
        <button onClick={this.changeMessage}>Update</button>
        <Willupdateprops message={this.state.message}/>
      </div>
    );
  }
};

export default Controllerwillupdateprops
