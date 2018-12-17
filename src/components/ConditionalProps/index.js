import React from 'react'

const Result = (props) => {
    return (
      <h1>
      {
        props.fiftyFifty ? "Your skills are well developed" : "Have to work on your skills" 
      }
      </h1>
    )
  };

export default class ConditionalProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: ++this.state.counter
    });
  }
  render() {
    let expression = Math.random() > .5 ? true : false
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
           <Result fiftyFifty = {expression} />
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
