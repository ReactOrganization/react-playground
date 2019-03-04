import React from 'react'

const textAreaStyles = {
  width: 235,
  margin: 5
};

// ToDoList
class DynamicallyRenderMap extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
      this.state = {
        userInput: '',
        toDoList: []
      }
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map((item,i) => <li key={i}
  >{item}</li>); // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <h3>Rendered in render method</h3>
        <ul>
          {items}
        </ul>
        <h3>Rendered in return method</h3>
        <ul>
          {this.state.toDoList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );
  }
};

export default DynamicallyRenderMap 
