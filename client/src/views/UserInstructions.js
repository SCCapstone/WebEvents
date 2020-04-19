import React, { Component } from "react";
import "../CSS/webevents-main.css";

class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarClass: "instructions",
    };
  }

  render() {
    return (
      <div id="MainBody">
        <div class="intro-banner img-cont">
          <img
            class="object-fit_cover"
            src="Banner3.jpg"
            alt="home-major-image-1"
          />
        </div>

        <div class="MainBody-inner">
          <div id="padded-container-center">
            <h1>Instructions how to use Web Events</h1>
            <h4>How to use:</h4>
            <ol>
              <li style={{ textAlign: "left" }}>
                Select the type of schedule you would like to create, (either
                Seminar, Field, or Work) from the ScheduleOptions box in the top
                left.
              </li>
              <li style={{ textAlign: "left" }}>
                Input the needed variables of the selected schedule type in the
                sidebar to the left.
              </li>
              <li style={{ textAlign: "left" }}>
                upload a data file for the schedule you would like to make.
                <ul>
                  <ul>-file types supported are CSV, XLSX, and ICS</ul>
                  <ul>
                    -seminars format rows are first and last name, the columns
                    are dates and/or times available, and the data must be list
                    of priorities
                  </ul>
                  <ul>
                    -fields format rows are the team names, and the columns are
                    dates and/or times the field is open, and the data must be a
                    list of priorities.
                  </ul>
                </ul>
              </li>
              <li style={{ textAlign: "left" }}>
                Once the calculation is finished your optimal schedule may be
                downloaded as a new file.
              </li>
            </ol>

            <div className="column-padding"></div>
          </div>
        </div>
        <div id="MainBody-Right"></div>
      </div>
    );
  }
}

export default Instructions;
