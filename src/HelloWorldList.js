import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import "./HelloWorldList.css";
import AddName from "./AddName";

class HelloWorldList extends Component {
  render() {
    return (
      <div className="HelloWorldList">
        <AddName addName={this.addName} />
        {this.renderNames()}
      </div>
    );
  }
  // Creates defualt list state of users Luke and TA
  constructor(props) {
    super(props);
    this.state = { names: ["Luke", "TA"] };
    this.addName = this.addName.bind(this);
  }
  // creates a list with key of name and sets name to the name provided
  // possible issue is if you have same name then the key might have errors as two objects have same key
  // returns helloworld component
  renderNames() {
    return this.state.names.map(name => <HelloWorld key={name} name={name} />);
  }
  // adding via array concat shortcut (...)
  addName(aName) {
    this.setState({ names: [...this.state.names, aName] });
  }
}

export default HelloWorldList;
