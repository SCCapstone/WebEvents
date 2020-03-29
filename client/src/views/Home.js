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
import SchedulerType from "../components/SchedulerType.js";
import SchedulerOption from "../components/SchedulerOptions.js";

class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
          navbarClass: "home",

          //Used by SchedulerType
          scheduleType: null, // default value, needs to be reset or readjusted

          //Used by ScheduleOption
          groupSize: null, // default value, needs to be reset or readjusted
        }
      }
    
    // Method used to handle ScheduleType Selection
    handleTypeSelect(x) {
        const types = this.state.scheduleType.slice();
        types = x;
        this.setState({scheduleType: types})
    }

    // Method used to handle scheduleOption Group size selection
    handleGroupSizeSelect(x) {
        const size = this.state.groupSize.slice();
        size = x;
        this.setState({groupSize: size})
    }

    render() {
        return(

            <div className="App">
                <div id="MainBody">
                    <div id="MainBody-Left">
                        <div id="padded-container-left-type">
                             <br/>
                            <h5>Type Selection Panel</h5>
                            <br/>
                            <div>
                                <SchedulerType onClick={() => this.handleTypeSelect(x)}/>
                            </div>
                        </div>
                        <div id="padded-container-left-option">
                            <br/>
                            <h5>Option Selection Panel</h5>
                            <br/>
                            <div>
                                <SchedulerOption onClick={() => this.handleGroupSizeSelect(x)}/>
                            </div>
                        </div>
                    </div>
                    <div id="MainBody-Center">
                        <div id="padded-container-center">
                            <DataPanel/>
                        </div>
                    </div>
                    <div id="MainBody-Right">
                        <div id="padded-container-right-instructions">
                            <div id="instructions-text">
                                <br/>
                                <h1>Instructions</h1>
                                <p>
                                    To use this application, follow the steps below:<br/><br/>
                                    1. The file must be in the correct format of First name- 
                                    Last name- preferences for all of the people<br/><br/>
                                    2. You must select the the scheduling type that you want to use<br/><br/>
                                    3. After you select the type, you have to select the specific 
                                    options for that type<br/><br/>
                                    4. Finally, you will upload your file, and click the export file to 
                                    download the finished schedule.<br/><br/>
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
