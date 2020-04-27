import React from "react";
import XLSX from "xlsx";
import "../CSS/webevents-main.css";

import Test from "./scheduletest.js";
import fieldscheduler from "./fieldschedule.js";
import workschedule from "./workschedule.js";

class SheetJSApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [], /* Array of Arrays e.g. [["a","b"],[1,2]] */
            cols: [], /* Array of column objects e.g. { name: "C", K: 2 } */
            detector: 0,  // Detector finds if there are empty rows and/or repeats
            
        };
        this.handleFile = this.handleFile.bind(this);
        this.exportFile = this.exportFile.bind(this);
    };
    
    handleFile() {        
        var file = this.props.uploadFile;

        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;

        reader.onload = (e) => {
            /* Parse data */
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            //const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            const data2 = XLSX.utils.sheet_to_json(ws, { blankCell: false, defval: 999999 });

            var emptyRows, repeats, groups;

            if (this.props.scheduleType === "seminar") {
                groups = Test(data2, this.props.groupSize, 0);
            }
            else if (this.props.scheduleType === "field") {
                groups = fieldscheduler(data2);
            }
            else if (this.props.scheduleType === "work")
            {
                groups = workschedule(data2, this.props.groupSize);
            }

            emptyRows = Test(data2, this.props.groupSize, 1); //if there are empty rows, this will = 1 ... else 0
            repeats = Test(data2, this.props.groupSize, 2); // if there are repeats, this will = 2 ... else 0

            /* Update state */
            this.setState({ data: groups });
            this.setState({ detector: (emptyRows + repeats)});
            
            var confirmation = 0;
            switch (this.state.detector) {
                case 1:
                    confirmation = window.confirm("The uploaded file is ill-formatted, there are "+
                        "empty rows (people/groups without preferences) in the input file!");
                    break;
                case 2:
                    confirmation = window.alert("The uploaded file is ill-formatted, there are "+
                        "repeated rows (multiple entries for specific people/groups) in the input file!");
                    break;
                case 3:
                    confirmation = window.alert("The uploaded file is ill-formatted, there are "+
                        "empty rows (people/groups without preferences) and repeated"+
                        " rows (multiple entries for specific people/groups) in the input file!");
                    break;
                default:
                    confirmation = true;
                    break;
            }

            if (!confirmation) {
                window.location.reload();
            }

        };

        if(this.props.uploadFile !== null) {
            if (rABS) 
                reader.readAsBinaryString(file); 
            else 
                reader.readAsArrayBuffer(file);
        } else {
            console.log("ERROR 1084: Upload File is NULL!");
        }

        
    };
    
  

  // Method used by the first button to process file
  manualProcessFile() {
    this.props.processFile(this.props.uploadFile);
    this.handleFile();

    this.props.checkUpload();
    this.props.doProcessed();
  };

  exportFile() {
    /* convert state to workbook */
    const ws = XLSX.utils.aoa_to_sheet(this.state.data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "results");

    /* generate XLSX file and send to client */
    if (this.props.isUploaded) {
      XLSX.writeFile(wb, "results.xlsx");
    }
    this.setState({ data: [[]] });
    window.location.reload(false);
  };
  renderUploadButton() {
    if(this.props.uploadFile) {
        return (
            <div>
                <button id="upload-button" onClick={() => this.manualProcessFile()}>
                    1. Process Uploaded File
                </button>
            </div>
        );
    }
  }
  renderDownloadButton() {
      if(this.props.isProcessed) {
        return (
            <div className="col-xs-2">   
                <button className="btn btn-success" onClick={() => this.exportFile()}>
                    2. Download Processed Schedule
                </button>
            </div>
        );
      }
  }
    render() {

        /** Thanks Steven, but I am going to retire this section for now
         //        let button
        let a = this.state.detector; 
        //(a = 0... no popups, a = 1... emptyrows, a = 2... repeats, a = 3... both)
        console.log("Returning the " + a + " if-statement");
        if (a === 0){ //If no popup needed
        */
        return (
            <div class="sheetjs">
                <DragDropFile 
                        handleFile={this.handleFile}
                        processFile={this.props.processFile}
                >
                    <div className="col-xs-1">
                        <DataInput 
                            handleFile={this.handleFile} 
                            processFile={this.props.processFile}
                        />
                    </div>
                    <br/>
                    {this.renderUploadButton()}
                    <br/>
                    {this.renderDownloadButton()}
                </DragDropFile>
            </div>
        );
    };
};

           

/*
  Simple HTML5 file drag-and-drop wrapper
  usage: <DragDropFile handleFile={handleFile}>...</DragDropFile>
    handleFile(file:File):void;
*/
class DragDropFile extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  suppress(evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }

  onDrop(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    const files = evt.dataTransfer.files;

    // Used in refactorization of code
    if (files && files[0]) {
      this.props.processFile(files[0]);
    } else {
      this.props.processFile(files);
    }
  }
  render() {
    return (
      <div
        onDrop={this.onDrop}
        onDragEnter={this.suppress}
        onDragOver={this.suppress}
      >
        {this.props.children}
      </div>
    );
  }
}

/*
  Simple HTML5 file input wrapper
  usage: <DataInput handleFile={callback} />
    handleFile(file:File):void;
*/
class DataInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) {
        this.props.processFile(files[0]);
    }
  }

  render() {
    return (
      <input
        type="file"
        className="form-control"
        accept={SheetJSFT}
        onChange={this.handleChange}
      />
    );
  }
}

/* list of supported file types */
const SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm",
]
  .map(function (x) {
    return "." + x;
  })
  .join(",");

export default SheetJSApp;
