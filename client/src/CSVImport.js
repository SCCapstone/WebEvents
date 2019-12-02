import React, { Component } from "react"; //gives component class on top of react
//import React, { useCallback } from "react";
// Import the dropzone component
//import Dropzone from "./dropzone";
import "./csvImport.css";
import Papa from "papaparse";
import { JsonToTable } from "react-json-to-table";
import { CSVLink, CSVDownload } from "react-csv";
import XLSX from 'xlsx';
//import { CSVReader } from 'react-papaparse';

class FileReader extends React.Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined
      };
    this.updateData = this.updateData.bind(this);
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

//called when button is pressed on webpage
  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
      header: true,
      download: true
    });
  };



  updateData(result) {
    var data = result.data;
    //THIS is where we would pass our data to a different function (pass to graphing function)
    //pass data to createTable
    console.log(data);

  }

  render() {
    console.log(this.state.csvfile);
      return (
        <div className="csvImport">
        <h2>Import CSV File!</h2>
        <input
          className="csv-input"
          type="file"
          ref={input => {
            this.filesInput = input;
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
              />
        <p />
              <button onClick={this.importCSV}> Upload now!</button>
      </div>
    );
  }
}

export default FileReader;

// <input type="file" onchange="parseExcelFile1(this)">


// We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
/*    return (
        <main className="App">
            <h1 className="text-center">Drag and Drop Example</h1>
            <Dropzone onDrop={onDrop} accept={"image/*"} />
        </main>

    );*/
