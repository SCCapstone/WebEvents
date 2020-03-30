import React, { Component } from "react";
import "../CSS/FileDownload.css";
const axios = require("axios");
var FileSaver = require("file-saver");

class FileDownloader extends Component {
  state = {
    apiResponse: "",
    downloading: false,
    downMessage: "",
    response: null
  }

  callAPI() {
    axios.get('http://ec2-3-133-106-204.us-east-2.compute.amazonaws.com:8000/download')
      .then((response) => {
        console.log(response);

        var blob = new Blob([response.data], { type: "text/plain" });
        FileSaver.saveAs(blob, "downloadedFile.txt")

      })
      .then(this.setState({
        downMessage: "Downloaded!"
      }));
  }

  handleDownload = event => {
    event.preventDefault();
    if (this.state.uploading) return;
    if (this.state.downloading) return;
    //if (!this.state.uploaded) {
    //   this.setState({ downMessage: "No file uploaded" });
    //  return;
    //}
    this.callAPI();
  }

  render() {
    return (
      <button className="btn btn-success" onClick={this.handleDownload} >
        2. Download ICal Output File
      </button>
    );
  }
}
export default FileDownloader;
