import React, { Component } from 'react';
import DataPanel from "../components/DataPanel";

/** Moved these imports into /component/DataPanel.js
 * 02/29/20
 * Lam Nguyen
 * This is the main center panel for the home page.
 * 
import SheetJSApp from "../components/sheet";
import RequestServer from "../components/RequestServer";
import FileUpload from "../components/FileUpload";
//import Options from "./Options";
import FileDownloader from "../components/FileDownload";
*/


import "../CSS/Home.css";
import SchedulerType from "../components/SchedulerType.js"
import SchedulerOption from "../components/SchedulerOption.js"

class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
          navbarClass: "home"
        }
      }

    render() {
        return(

            <div className="App">
                <div id="MainBody">
                    <div id="MainBody-Left">
                        <div id="padded-container-left-type">
                            <p>Test Option Panel <br/>
                            Input your options panel / type selector here
                            </p>
                            <SchedulerType/>
                        </div>
                        <div id="padded-container-left-option">
                            Test option pane
                            <SchedulerOption/>
                        </div>
                    </div>
                    <div id="MainBody-Center">
                        <div id="padded-container-center">
                            <DataPanel/>
                            <div className="column-padding"></div>
                        </div>
                    </div>
                    <div id="MainBody-Right">
                        <div id="padded-container-right-instructions">
                            <div id="instructions-text">
                                <h1>Instructions</h1>
                                <p>
                                We have created an app that will provide an optimal schedule of event attendees based on their mutual 
                                preferences for dates and times. The app user would be the event organizer. Our app will have a web-page
                                take an input of an excel file that has scheduling preferences and output a schedule that has
                                scheduled clients based on their preferences. The target audience is event organizers who need to 
                                schedule a lot of people in a set period of time while attempting to make event speakers happy with 
                                their scheduled times.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default home;
