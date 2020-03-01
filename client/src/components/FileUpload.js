import React, { Component } from "react";
import "../CSS/FileUpload.css";
import axios from "axios";

const website = "http://ec2-3-133-106-204.us-east-2.compute.amazonaws.com:8000/";
// SET your own endpoint
const endpoint = website+"upload";

class App extends Component {
  state = {
    selectedFile: null,
    loaded: 0,
    message: "Choose a file...",
    defaultmessage: "Choose a file...",
    uploading: false,
    uploaded: false
  };
  handleFileChange = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
      message: event.target.files[0]
        ? event.target.files[0].name
        : this.state.defaultmessage
    });
  };
  handleUpload = event => {
    event.preventDefault();
    if (this.state.uploading) return;
    if (!this.state.selectedFile) {
      this.setState({ message: "Select a file first" });
      return;
    }
    this.setState({ uploading: true });
    // define upload
    const data = new FormData();
    data.append("file", this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post(endpoint, data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: Math.round(
              (ProgressEvent.loaded / ProgressEvent.total) * 100
            )
          });
        }
      })
      .then(res => {
        this.setState({
          selectedFile: null,
          message: "Uploaded successfully",
          uploading: false,
          uploaded: true
        });
      })
      .catch(err => {
        this.setState({
          uploading: false,
          message: "Failed to upload"
        });
      });
  };
  render() {
    return (
      <form className="box" onSubmit={this.handleUpload}>
        
        <input
          type="file"
          name="file-5[]"
          id="file-5"
          className="form-control"
          onChange={this.handleFileChange}
        />
        <label htmlFor="file-5"></label>
        <br/>
        <button id="upload-button" onClick={this.handleUpload}>
            1. Process Uploaded ICal File
        </button>
      </form>
    );
  }
}

export default App;
