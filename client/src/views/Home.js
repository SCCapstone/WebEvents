import React, { Component } from "react";

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

import "../CSS/webevents-main.css";
import SchedulerType from "../components/SchedulerType.js";
import SchedulerOption from "../components/SchedulerOptions.js";
import SheetJSApp from "../components/sheet";
//import RequestServer from "../components/obsolete/RequestServer";
import TemplateDownload from "../components/TemplateDownload";
import ModalVideoPopup from "../components/ModalVideoPopup";

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
    super(props);
    this.state = {
      navbarClass: "home",

      //Used by SchedulerTypes
      scheduleType: "null", // default value, needs to be reset or readjusted

      //Used by ScheduleOptions
      groupSize: 0, // default value, needs to be reset or readjusted

      //Used by SheetJSApp
      uploadFile: null,
      isUploaded: false,
      isProcessed: false,

      //Used by ModalVideoPopup
      initialPopupVideo: true,
    };
  }

  // Method used to handle ScheduleType Selection
  handleTypeSelect(x) {
    var types = this.state.scheduleType.slice();
    types = x;
    this.setState({ scheduleType: types });
    console.log("The Schedule Type got changed to " + this.state.scheduleType);
  }

  // Method used to handle scheduleOption Group size selection
  handleGroupSizeSelect(x) {
    this.setState({ groupSize: x });
    console.log("The group size got changed to " + this.state.groupSize);
  }

  // Method used by sheetjs
  processFile(file) {
    //To Remove
    if (file == null) {
      // TODO Setup popup window and disable button
      window.alert("The file being processed isn't uploaded yet, upload your file using the upload box below!");
      console.log("The file in processFile is null");
    } else {
      //window.alert("The file is processed successfully, click the download button to receive the output file!");
      console.log("The file in processFile is OK.");
    }

    console.log("processFile(file): Attempted process file");

    this.setState({ uploadFile: file });
  }

  checkUpload() {
    if (this.state.uploadFile != null) {
      this.setState({ isUploaded: true });
    }
  }

  doProcessed() { this.setState({ isProcessed: true }); }

  renderStatus() { 
    if (this.state.scheduleType !== "null") 
      return (<h5>Selected Scheduler type: {this.state.scheduleType}</h5>); 
  }

  renderScheduleType() {

    return (
      <div>
        <h1>Select the type of scheduler</h1>
        <SchedulerType
          onClick={(x) => this.handleTypeSelect(x)}
          schedulerType={this.state.scheduleType}
        />
        {this.renderStatus()}
      </div>
    );
  }

  renderGroupSize() {
    if (this.state.groupSize !== 0)
      return(<h5>Selected Group Size: {this.state.groupSize - 1}-{this.state.groupSize}</h5>);
  }

  renderScheduleOptions() {
    if ( this.state.scheduleType !== "field" && this.state.scheduleType !== "null") {
      return (
        <div>
          <h1>Select your group size</h1>
          <SchedulerOption
            onClick={(x) => this.handleGroupSizeSelect(x)}
            groupSize={this.state.groupSize}
          />
          {this.renderGroupSize()}
        </div>
      );
    }
  }
  renderSchedulerTemplate() {
    if (this.state.groupSize !== 0 || this.state.scheduleType === "field") {
      return (
        <div>
          <h1>Need the template for the {this.state.scheduleType} scheduler?</h1>
          <TemplateDownload scheduleType={this.state.scheduleType} />
          {/** <RequestServer />*/}
        </div>
      );
    }
  }
  renderDataPanel() {
    if(this.state.groupSize !== 0 || this.state.scheduleType === "field") {
      return (
        <div id="DataPanel-Container">
          <div id="Excel-Container">
            <div id="padded-text">
              <h1>Upload your Spreadsheet</h1>
              <p>
                File extensions supported: .csv, .xls, .xlsx, .xlsm, .xltx, xltm
              </p>
              <SheetJSApp
                groupSize={this.state.groupSize}
                uploadFile={this.state.uploadFile}
                processFile={(file) => this.processFile(file)}
                scheduleType={this.state.scheduleType}
                isUploaded={this.state.isUploaded}
                isProcessed={this.state.isProcessed}
                doProcessed={() => this.doProcessed()}
                checkUpload={() => this.checkUpload()}
              />
            </div>
          </div>
        </div>
      );
    }
  }

  renderModalVideoPopup() {
    return (
      <ModalVideoPopup 
        isOpen={this.state.initialPopupVideo}
        closeVideo={() => this.closePopupVideo()}
      />
    );
  }

  closePopupVideo() {
    window.alert("Closed Video?")
    this.setState({ initialPopupVideo: false });
  }

  render() {
    return (
      <div className="App">
        <div class="intro-banner img-cont">
          <img
            class="object-fit_cover"
            src="homepageBanner.jpg"
            alt="home-major-1"
          />
        </div>
        <br />
        {this.renderModalVideoPopup()}
        <div className="main-body">
          <div className="inner-main-body">
            <div className="Instructions">
              <h1>Quick Instructions</h1>
              To use this application, follow the steps below:
              <ol>
                <li>
                  The file must be in the correct format of First name- Last
                  name- preferences for all of the people
                </li>

                <li>
                  You must select the scheduling type that you want to use
                </li>
                <li>
                  After you select the type, you have to select the specific
                  options for that type
                </li>
                <li>
                  Finally, you will upload your file, and click the export file
                  to download the finished schedule.
                </li>
              </ol>
            </div>

            {/* this is referenced by ScheduleTypes */}
            {this.renderScheduleType()}

            {/* This is referenced by ScheduleOptions */}
            {this.renderScheduleOptions()}

            {/* This is for the template downloads*/}
            {this.renderSchedulerTemplate()}

            {/* This is for the excel file input*/}
            {this.renderDataPanel()}

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
