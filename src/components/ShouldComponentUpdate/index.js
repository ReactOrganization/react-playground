import React from 'react';

class ShouldComponentUpdate extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
    return nextProps.value%2 ==0
     // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class ShouldComponentUpdateController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <p>This method is a useful way to optimize performance. For example,<br />
          the default behavior is that your component re-renders when it <br />
          receives new props, even if the props haven't changed. You can<br />
          use shouldComponentUpdate() to prevent this by comparing the props.<br />
          The method must return a boolean value that tells React whether or<br />
      not to update the component. You can compare the current props (this.props)<br />
      to the next props (nextProps) to determine if you need to update or not, and<br />
          return true or false accordingly</p>
        <button onClick={this.addValue}>Add</button>
        <ShouldComponentUpdate value={this.state.value}/>
      </div>
    );
  }
};

export default ShouldComponentUpdateController
