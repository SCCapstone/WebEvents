import React, { Component } from "react";
import "./AddName.css";
// its own component that is encorporated in the list which adds to the list

class AddName extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "" };
    this.updateHandler = this.updateHandler.bind(this);
    this.addName = this.addName.bind(this);
  }
  render() {
    return (
      <div className="AddName">
        <input
          type="text"
          onChange={this.updateHandler}
          value={this.state.userName}
        />
        <br />
        <button onClick={this.addName}>Add</button>
      </div>
    );
  }
  // updates state when eventhandler is called (onchange)
  updateHandler(event) {
    // sets username to the text box value (text string)
    this.setState({ userName: event.target.value });
  }
  // adds the name to state and then clears the state of component
  // this is called when button is clicked
  // this function relies on modifying the state to run
  addName() {
    if (!(this.state.userName === "")) {
      this.props.addName(this.state.userName);
      this.setState({ userName: "" });
    }
  }
}

export default AddName;
