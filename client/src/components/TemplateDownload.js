import React from "react";
import "../CSS/sheet.css";
import "../CSS/DataPanel.css";

/**
 * this class for grabbing templated files
 * from the backend server. The downloaded
 * file will be dependant on scheduler type chosen.
 */

class TemplateDownload extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
  }
  /*
     handleChange(e) {
         String schedulerType = e;
     };*/

  downloadTemplateFile = () => {
    var scheduleType = this.props.scheduleType;
    console.log("downloading: " + scheduleType);
    fetch(
      "http://ec2-3-133-106-204.us-east-2.compute.amazonaws.com:8000/" +
        scheduleType
    ).then(response => {
      response.blob().then(blob => {
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
      <div>
      <button className="template-button" onClick={this.downloadTemplateFile}>
        Download {this.props.scheduleType} Template File
      </button>
      </div>
    );
  }
}

export default TemplateDownload;
