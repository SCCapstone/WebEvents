import React, { Component } from 'react';
 
class Instructions extends Component {
    constructor(props) {
        super(props)
        this.state = {
          navbarClass: "instructions"
        }
      }
    
    render() {
        return (
            <div id="MainBody">
            <div id="MainBody-Left"></div>
               <div id="MainBody-Center">
                  <div id="padded-container-center">
                    <h1>Instructions how to use Web Events Scheduling</h1>
                    <p>How to use: <br/>
                    To use this application, you must adhere to the folllowing steps:<br/>
                     1. Select the type of schedule you would like to create, (either Seminar, Field, or Work) from the 
                        ScheduleOptions box in the top left.<br/>
                     2. input the needed variables of the selected schedule type in the sidebar to the left.<br/>
                     3. upload a data file for the schedule you would like to make.<br/>
                          -file types supported are CSV, XLSX, and ICS<br/>
                          -seminars format rows are first and last name, the columns are dates and/or times available, 
	                          and the data must be list of priorities<br/>
                          -fields format rows are the team names, and the columns are dates and/or times the field is 
	                          open, and the data must be a list of priorities.<br/>
                     4. Once the calculation is finished your optimal schedule may be downloaded as a new file.
                      </p>
                    <div className="column-padding"></div>
                  </div>
               </div>
            <div id="MainBody-Right"></div>
            </div>
        );
    }  
}
 
export default Instructions;
