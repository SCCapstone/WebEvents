import React, { Component } from 'react';

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


import "../CSS/App.css";
import "../CSS/Home.css";
import "../CSS/DataPanel.css";
import SchedulerType from "../components/SchedulerType.js";
import SchedulerOption from "../components/SchedulerOptions.js";
import SheetJSApp from "../components/sheet";
import RequestServer from "../components/RequestServer";

/** Retired iCal properties
 * Lam Nguyen
 * 2020-03-29
 * 
import FileUpload from "../components/FileUpload";
import FileDownloader from "../components/FileDownload";
*/


// This is our parent class ot our component/*.js
class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
          navbarClass: "home",

          //Used by SchedulerTypes
          scheduleType: "field", // default value, needs to be reset or readjusted

          //Used by ScheduleOptions
          groupSize: 3, // default value, needs to be reset or readjusted

          //Used by SheetJSApp
          uploadFile: null,
        };
      }
    
    // Method used to handle ScheduleType Selection
    handleTypeSelect(x) {
        var types = this.state.scheduleType.slice();
        types = x;
        this.setState({scheduleType: types})
        console.log("The Schedule Type got changed to "+this.state.scheduleType);
    }

    // Method used to handle scheduleOption Group size selection
    handleGroupSizeSelect(x) {
        this.setState({groupSize: x});
        console.log("The group size got changed to "+this.state.groupSize);
    }

    // Method used by sheetjs
    processFile(file) {

        //To Remove
        if (file == null) {
            console.log("The file in processFile is null");
        } else {
            console.log("The file in processFile is OK.")
        }

        console.log("processFile(file): Attempted process file");

        this.setState({uploadFile: file});
    }

    renderScheduleType() {
        return (
            <SchedulerType 
                onClick = {(x) => this.handleTypeSelect(x)}
                schedulerType = {this.state.scheduleType}
            />
        )
    }

    renderScheduleOptions() {
        return (
            <SchedulerOption 
                onClick = {(x) => this.handleGroupSizeSelect(x)}
                groupSize = {this.state.groupSize}
            />
        )
    }


    renderDataPanel() {
        return (
            <div id="DataPanel-Container">
                <div id="Excel-Container">
                    <div id="padded-text">
                        <h1>Upload your Spreadsheet</h1>
                        <p>File extensions supported: .xls, .xlsx, .xlsm, .xltx, xltm</p>
                        <SheetJSApp 
                            groupSize = {this.state.groupSize}
                            uploadFile = {this.state.uploadFile}
                            processFile = {(file) => this.processFile(file)}
                        />
                        <RequestServer />
                    </div>
                </div> 




                {/* Retired iCal container
                    This scheduler seems to be specifically excel sheets only
                    Lam Nguyen
                    2020-03-29

                <div id="ical-Container">
                    <div id="padded-text">
                        <h1>ICal Files Input</h1>
                        <p>File extensions supported: .ical</p>
                        <br/>
                        <FileUpload />
                        <br/>
                        <FileDownloader />
                    </div>
                </div>
                */}
            </div>
        );
    }

    render() {
        return(
            <div className="App">
                <div class="intro-banner img-cont">
                    <img class="object-fit_cover" 
                        src="homepageBanner.jpg" 
                        alt="home-major-image-1"/>
                </div>
                {/*
                    <h1>Debug Area</h1>
                    1. Schedule Type {this.state.scheduleType} <br/>
                    2. Group Size {this.state.groupSize} 
                */}
                <br/>
                <div className="main-body">
                    <div className="inner-main-body">
                        <div className="Instructions">
                            <h1>Quick Instructions</h1>
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
                        {/* this is referenced by ScheduleTypes */}
                        
                        <div>
                            <h1>Select the type of scheduler</h1>
                            {this.renderScheduleType()}
                        </div>

                        {/* This is referenced by ScheduleOptions */}
                        <div>
                            <h1>Select your group size and duplicity</h1>
                            {this.renderScheduleOptions()}
                        </div>

                        {/* This is for the excel file input*/}
                        <div>
                            {this.renderDataPanel()}
                        </div>
                    </div>
                </div>

                {/* retired, old version of the home page
                <div id="MainBody">
                    <div id="MainBody-Left">
                        <div id="padded-container-left-type">
                             <br/>
                            <h5>Type Selection Panel</h5>
                            <br/>
                            <div>
                                {this.renderScheduleType()}
                            </div>
                        </div>
                        <div id="padded-container-left-option">
                            <br/>
                            <h5>Option Selection Panel</h5>
                            <br/>
                            <div>
                                {this.renderScheduleOptions()}
                            </div>
                        </div>
                    </div>
                    <div id="MainBody-Center">
                        <div id="padded-container-center">
                            {this.renderDataPanel()}
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
                */}
            </div>

        );
    }
}


export default home;
