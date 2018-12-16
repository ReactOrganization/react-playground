import React from 'react'

class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    //    if (this.state.display === true) {
    //      return (
    //        <div>
    //          <button onClick={this.toggleDisplay}>Toggle Display</button>
    //          <h1>Displayed!</h1>
    //        </div>
    //      );
    //    }
    //    else {
    //      return (
    //        <div>
    //          <button onClick={this.toggleDisplay}>Toggle Display</button>
    //        </div>
    //      );
    //    }
    //
    //   We can use ternary but in this case we have to return else after semicolon
    //   it can be either false or null 
    //   return (
    //     <div>
    //       <button onClick={this.toggleDisplay}>Toggle Display</button>
    //       {this.state.display ? (<h1>Displayed with ternary!</h1>) : null}
    //     </div>
    //   )
    //
    // instead of if/else we can use short-circuit and we don't need to describe
    // else to return nothing

    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && (<h1>Displayed !</h1>)}
      </div>
    )
  }
};

export default ConditionalRendering
