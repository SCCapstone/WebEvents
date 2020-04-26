import React from "react";
import "../CSS/webevents-main.css";

/**
 * this class for grabbing templated files
 * from the backend server. The downloaded
 * file will be dependant on scheduler type chosen.
 */

class TemplateDownload extends React.Component {

  /** Useless consctructor

  no-useless-constructor
  
  constructor(props) {
    super(props);
  }*/

  /**
   * the fetch URL is for the URL of the server. The /scheduletype is for dynamic
   * fetching. if you wish to add more schedule types you must add a backend
   * endpoint. The scheduletype is chosen from dropdown menu and passed as props.
   * This class is implemented in Home.js
   */

  downloadTemplateFile = () => {
    var scheduleType = this.props.scheduleType;
    console.log("downloading: " + scheduleType);
    fetch(
      "http://ec2-3-133-106-204.us-east-2.compute.amazonaws.com:8000/" +
        scheduleType
    ).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = scheduleType + ".csv";
        a.click();
      });
    });
  };

  render() {
    return (
      //download
      <div className="template-cont">
        <button id="template-button" onClick={this.downloadTemplateFile}>
          Download {this.props.scheduleType} Template File
        </button>
      </div>
    );
  }
}

export default TemplateDownload;
