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
                                    To use this application, you must adhere to the folllowing steps:<br/>
                                    -First, the file must be in the correct format of First name- 
                                    Last name- preferences for all of the people<br/>
                                    -Next, you must select the the scheduling type that you want to use<br/>
                                    -After you select the type, you have to select the specific 
                                    options for that type<br/>
                                    -Finally, you will upload your file, and click the export file to 
                                    download the finished schedule.<br/>
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
