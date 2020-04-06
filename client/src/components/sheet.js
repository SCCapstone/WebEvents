import React from "react";
import XLSX from "xlsx";
import "../CSS/sheet.css";
import "../CSS/DataPanel.css";
import Test from "./scheduletest.js";
import fieldscheduler from "./fieldschedule.js";
import workschedule from "./workschedule.js";
/* not used
import seminarScheduler from "./scheduletest.js";
import fieldscheduler from "./fieldschedule.js";
*/

//console.log("OPTIONS IS: " + options);
var whatever;

class SheetJSApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], /* Array of Arrays e.g. [["a","b"],[1,2]] */
            cols: []  /* Array of column objects e.g. { name: "C", K: 2 } */
        };
        this.handleFile = this.handleFile.bind(this);
        this.exportFile = this.exportFile.bind(this);
    };
    
    handleFile() {
        /* Boilerplate to set up FileReader */


        /**
         * Testing file global refactor successful
         * The upload file is now successfully integrated into the website as is.
         * Lam Nguyen
         * 2020-03-29
         */
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

            /**
             * Refactoring successful
             * Lam Nguyen
             * 2020-03-29 1858
             */
            
            console.log(this.props.scheduleType);
            console.log(this.props.groupSize);
            if (this.props.scheduleType == "seminar") {
                console.log("seminar scheduler");
                var groups = Test(data2, this.props.groupSize);
            }
            else if (this.props.scheduleType == "field") {
                console.log("field scheduler")
                var groups = fieldscheduler(data2);
            }
           else if (this.props.scheduleType == "work")
            {
                console.log("work scheduler");
                var groups = workschedule(data2);
            }
            //var groups = fieldscheduler(data2);
            //const wsd = XLSX.utils.aoa_to_sheet(groups);
            /* Update state */
            this.setState({ data: groups });
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
    }

    exportFile() {
        /* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(this.state.data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "results");

        /* generate XLSX file and send to client */
        XLSX.writeFile(wb, "results.xlsx")
    };

    render() {
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
                            1. Process Uploaded Excel File
                        </button>
                    </div>
                    <br/>
                    <div className="col-xs-2">   
                        <button className="btn btn-success" onClick={this.exportFile}>2. Download Excel Output File</button>
                    </div>
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



/* Out Table is now retired, no use for now
    Lam Nguyen
    2020-03-19

    
    Simple HTML Table
    usage: <OutTable data={data} cols={cols} />
        data:Array<Array<any> >;
        cols:Array<{name:string, key:number|string}>;
    

class OutTable extends React.Component {
    constructor(props) { 
        super(props); 
    };
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>{this.props.cols.map((c) => <th key={c.key}>{c.name}</th>)}</tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((r, i) => <tr key={i}>
                            {this.props.cols.map(c => <td key={c.key}>{r[c.key]}</td>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    };
};
*/

/* list of supported file types */
const SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function (x) { return "." + x; }).join(",");


/** not used 
 * retired as of now
 * Lam Nguyen
 * 2020-03-29
 * 
     generate an array of column objects 
const make_cols = refstr => {
    let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i }
    return o;
};
*/

export default SheetJSApp;
