import React from "react";
import XLSX from "xlsx";
import "../CSS/webevents-main.css";

import Test from "./scheduletest.js";
import fieldscheduler from "./fieldschedule.js";
import workschedule from "./workschedule.js";
import Popup from "reactjs-popup";


class SheetJSApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], /* Array of Arrays e.g. [["a","b"],[1,2]] */
            cols: [],
            detector: false  /* Array of column objects e.g. { name: "C", K: 2 } */
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
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            const data2 = XLSX.utils.sheet_to_json(ws, { blankCell: false, defval: 999999 });
            
            if (this.props.scheduleType === "seminar") {
                console.log("seminar scheduler");
                var emptyRows = Test(data2, this.props.groupSize, true);
            
                var groups = Test(data2, this.props.groupSize, false);
            }
            else if (this.props.scheduleType === "field") {
                console.log("field scheduler")
                var groups = fieldscheduler(data2);
            }
            else if (this.props.scheduleType === "work")
            {
                console.log("work scheduler");
                var groups = workschedule(data2, this.props.groupSize);
            }

            /* Update state */
            this.setState({ data: groups });
            this.setState({ detector: emptyRows});
        };
        if(this.props.uploadFile != null) {
            if (rABS) 
                reader.readAsBinaryString(file); 
            else 
                reader.readAsArrayBuffer(file);
        } else {
            console.log("ERROR 1084: Upload File is NULL!");
        }
    };

    // Method used by the first button to process file
    manualProcessFile(){
        this.props.processFile(this.props.uploadFile);
        this.handleFile();
        

        this.props.checkUpload();
        //this.props.isUploaded = true;
    }

    exportFile() {

        /* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(this.state.data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "results");

        /* generate XLSX file and send to client */
        if(this.props.isUploaded) {
            XLSX.writeFile(wb, "results.xlsx")
        }
        this.setState({ data: [[]] });
        window.location.reload(false);
    };

    

    render() {
//        let button;
        
        
        let a = this.state.detector;
        if (a == false){ //If popup needed, render this
           // console.log("Here Here" + a);


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

                        <div>
                            
                            <button id="upload-button" onClick={() => this.manualProcessFile()}>
                                1. Process Uploaded File
                            </button>
                             

                        </div>
                        <br/>
                        <div className="col-xs-2">   
                            <button className="btn btn-success" onClick={() => this.exportFile()}>
                                2. Download Processed Schedule
                            </button>
                        </div>
                    </DragDropFile>
                </div>
            );
        }
        else{ //If no popup needed (ie no empty rows) render this
            
            
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

                        <Popup trigger = {
                            <button id="upload-button" onClick={() => this.manualProcessFile()}>
                                Warning!!!
                            </button>} position = "right">
                                {close => (
                                    <div>
                                        Warning! You have empty rows in this file. 
                                    <a className="close" onClick={close}>
                                        &times;
                                    </a>
                                    </div>
                                )}
                            </Popup>
                        
                        <br/>
                        
                        <div className="col-xs-2">   
                            <button className="btn btn-success" onClick={() => this.exportFile()}>
                                2. Download Processed Schedule Anyway
                            </button>
                        </div>
                    </DragDropFile>
                </div>
            );
        }
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
    };

    suppress(evt) { 
        evt.stopPropagation(); 
        evt.preventDefault(); 
    };

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
    };
    render() {
        return (
            <div onDrop={this.onDrop} onDragEnter={this.suppress} onDragOver={this.suppress}>
                {this.props.children}
            </div>
        );
    };
};

/*
  Simple HTML5 file input wrapper
  usage: <DataInput handleFile={callback} />
    handleFile(file:File):void;
*/
class DataInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(e) {
        const files = e.target.files;
        if (files && files[0])
            this.props.processFile(files[0]);
    };

    render() {
        return (
            <input type="file" className="form-control" accept={SheetJSFT} onChange={this.handleChange} />
        );
    }
}

/* list of supported file types */
const SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function (x) { return "." + x; }).join(",");

export default SheetJSApp;
