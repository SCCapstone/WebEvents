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
            alt="home-major-1"
          />
        </div>

        <div className="MainBody-inner">
          <div className="padded-container-center">
            <h1>Instructions how to use Web Events</h1>
            <h4>How to use:</h4>
            <ol>
              <li style={{ textAlign: "left" }}>
                Select the type of schedule you would like to create, (either
                Seminar, Field, or Work) from the ScheduleOptions box.
              </li>
              <img
                class="user-instructions-img"
                src="InstructionsSchedulerType.png"
                alt="Scheduler instructions"
              />
              <li style={{ textAlign: "left" }}>
                Input the needed variables of the selected schedule type,
                otherwise the default attributes will be selected.
              </li>
              <img
                class="user-instructions-img"
                src="InstructionsGroupSize.png"
                alt="Group size instructions"
              />
              <li style={{ textAlign: "left" }}>
                Upload a data file for the schedule you would like to make. If
                you need a reference of the expected format download a template
                file. The downloaded template file will be dependant on the
                scheduler selected from the dropdown menu.
                <ul>
                  <ul>
                    &emsp;-File types supported are .csv, .xls, .xlsx, .xlsm,
                    .xltx, xltm{" "}
                  </ul>
                  <ul>
                    &emsp;-Seminar format is: Starting rows are first and last
                    name followed by preferences. The columns are dates and/or
                    times available, and the data must be list of priorities
                    going from 1 as top priority to higher numbers being lower
                    priority.
                  </ul>
                  <ul>
                    &emsp;-Field format is: rows are the team names, and the
                    columns are dates and/or times the field is open, and the
                    data must be a list of priorities with 1 being top priority
                    and higher numbers being lower priority. This scheduling
                    algorithm does not account for size and will give each
                    person a unique time according to their preference.
                  </ul>
                  <ul>
                    &emsp;-Work Scheduler format is: rows are the people, and
                    the columns are the shifts. This scheduling algorithm takes
                    in the size that you want for each shift, and will try to
                    assign everyone an optimal work schedule.
                  </ul>
                </ul>
              </li>
              <img
                class="user-instructions-img"
                src="instructions.gif"
                alt="Group size instructions"
              />
              <li style={{ textAlign: "left" }}>
                Press the process button to schedule your data. Once the
                calculation is finished your optimal schedule may be downloaded
                as a new file.
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
