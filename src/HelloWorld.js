import React, { Component } from "react"; //gives component class on top of react
import "./HelloWorld.css";

// every component class needs render()
class HelloWorld extends Component {
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br />
        <button onClick={this.helloTA}>Click Me!</button>
      </div>
    );
  }
  // ES2015 function that sets default state
  // needs to accept props as arg
  constructor(props) {
    super(props);
    this.state = { greeting: "Hello" };
    this.helloTA = this.helloTA.bind(this);
  }
  //helloTA function
  // cannot be JUST this.setState becuase otherwise comes back as undefined
  // So do this.fuctionName = this.functionName.bind(this) in the CONSTRUCTOR
  helloTA() {
    this.setState({ greeting: "Goodbye" });
  }
}

export default HelloWorld;
