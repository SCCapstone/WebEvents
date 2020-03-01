import React from "react";
import XLSX from "xlsx";
import "../CSS/sheet.css";
import Test from "./scheduletest.js";
import seminarScheduler from "./scheduletest.js";
import fieldscheduler from "./fieldschedule.js";
//import SchedulerOptions from "./SchedulerOptions";

//var options = this.props.SchedulerOptions.groupsize;
//console.log("OPTIONS IS: " + options);
var whatever;
console.log(whatever);

class SheetJSApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupsize: 0,
            data: [], /* Array of Arrays e.g. [["a","b"],[1,2]] */
            cols: []  /* Array of column objects e.g. { name: "C", K: 2 } */
        };
        this.handleFile = this.handleFile.bind(this);
        this.exportFile = this.exportFile.bind(this);
    };

    getSize = () => {
        this.setState({ groupsize: this.props.name })
        //return this.groupsize;
        console.log(this.state.groupsize);
        return;
    }

    whatever2 = this.props.name;
    handleFile(file/*:File*/,whatever2) {
        /* Boilerplate to set up FileReader */
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
            whatever2 = this.props.name;
            console.log(whatever2);
            //console.log(data2);
            //var options = this.getSize();
            //var options = this.groupsize;
           // console.log(options);
           // console.log("GROOP SIZE IS: "+options);
            var groups = Test(data2, whatever2);

            //var groups = fieldscheduler(data2,whatever2);
            const wsd = XLSX.utils.aoa_to_sheet(groups);
            /* Update state */
            //this.setState({ data: data, cols: make_cols(ws['!ref']) });
            this.setState({ data: groups });
        };
        if (rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
    };
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
            <DragDropFile handleFile={this.handleFile}>
                { whatever = this.props.name /* this.getSize(this.props.name)   */          /*this.getSize({ groupsize: this.props.name })*/}
                {/*console.log(this.props.name)*/}
                <div className="row"><div className="col-xs-1">
                    <DataInput handleFile={this.handleFile} />
                </div></div>
                <div className="button"><div className="col-xs-2">
                    <button disabled={!this.state.data.length} className="btn btn-success" onClick={this.exportFile}>Export</button>
                </div></div>
                <div className="row2"><div className="col-xs-3">
                    <OutTable data={this.state.data} cols={this.state.cols} />
                </div></div>
            </DragDropFile>

        );
    };
};

//if (typeof module !== 'undefined') module.exports = SheetJSApp

/* -------------------------------------------------------------------------- */

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
    suppress(evt) { evt.stopPropagation(); evt.preventDefault(); };
    onDrop(evt) {
        evt.stopPropagation(); evt.preventDefault();
        const files = evt.dataTransfer.files;
        if (files && files[0]) this.props.handleFile(files[0]);
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
        if (files && files[0]) this.props.handleFile(files[0]);
    };
    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="file">Spreadsheet:</label>
                    <input type="file" className="form-control" id="file" accept={SheetJSFT} onChange={this.handleChange} />
                </div>
            </form>
        );
    };
}

/*
  Simple HTML Table
  usage: <OutTable data={data} cols={cols} />
    data:Array<Array<any> >;
    cols:Array<{name:string, key:number|string}>;
*/
class OutTable extends React.Component {
    constructor(props) { super(props); };
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

/* list of supported file types */
const SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function (x) { return "." + x; }).join(",");

/* generate an array of column objects */
const make_cols = refstr => {
    let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i }
    return o;
};
export default SheetJSApp;
