import React, { Component } from 'react';
import "../CSS/App.css";
import "../CSS/Home.css";

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
              <div class="intro-banner img-cont">
          <img
            class="object-fit_cover"
            src="homepageBanner.jpg"
            alt="home-major-image-1"
          />
        </div>
            
               <div id="MainBody-Center">
                  <div id="padded-container-center">

                  <h1>Instructions how to use Web Events</h1>
                    <h4>How to use:</h4>
                    <p>

                     1. Select the type of schedule you would like to create, (either Seminar, Field, or Work) from the 
                        ScheduleOptions box in the top left.<br/>
                     2. input the needed variables of the selected schedule type in the sidebar to the left.<br/>
                     3. upload a data file for the schedule you would like to make.<br/>

                     <nbsp/> -file types supported are CSV, XLSX, and ICS<br/>
                     <nbsp/>-seminars format rows are first and last name, the columns are dates and/or times available, 
	                          and the data must be list of priorities<br/>
                     <nbsp/>-fields format rows are the team names, and the columns are dates and/or times the field is 

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
