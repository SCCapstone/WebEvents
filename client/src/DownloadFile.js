import React, { Component } from "react";
import axios from "axios";
// SET your own endpoint
const endpoint = "http://localhost:9000/download";

class FileDownloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ""
    }
  }

  callAPI() {
    fetch("http://localhost:9000/download")
      .then(res => res.text())
      .then(res => this.setState({
        apiResponse: res
      }))
      .catch(err => err)
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <span>
        {this.apiResponse}
      </span>
    );
  }
}
export default FileDownloader;