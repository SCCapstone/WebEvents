import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "../CSS/webevents-main.css";

class SchedulerOptions extends React.Component {
  sendData = () => {
    this.props.parentCallback("Hey Popsie, How�s it going?");
  };

  constructor(props) {
    super(props);
    this.state = {
      dupes: false,
    };
  }

  allowDupes = () => {
    this.setState({ dupes: !this.state.dupes });
    console.log(this.state.dupes);
  };

  render() {
    //return( change
    return (
      <div className="schedulerTypeCont">
        <div className="scheduleTypeBar">
          {["down"].map((direction) => (
            <DropdownButton
              drop={direction}
              variant="secondary"
              title={` Group Size `}
              id={`dropdown-button-drop-${direction}`}
              key={direction}
            >
              <Dropdown.Item onClick={() => this.props.onClick(2)}>
                Group of 1-2{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.onClick(3)}>
                Group of 2-3{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.onClick(4)}>
                Group of 3-4{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.onClick(5)}>
                Group of 4-5{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.onClick(6)}>
                Group of 5-6{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.onClick(7)}>
                Group of 6-7{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.onClick(8)}>
                Group of 7-8{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.onClick(9)}>
                Group of 8-9{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => this.props.onClick(10)}>
                Group of 9-10{" "}
              </Dropdown.Item>

              {/*console.log(this.state.groupsize)*/}
            </DropdownButton>
          ))}
        </div>
      </div>
    );
  }
}

export default SchedulerOptions;
