import React, { Component } from "react";


import SheetJSApp from "../components/sheet";
import RequestServer from "../components/RequestServer";
import FileUpload from "../components/FileUpload";
import FileDownloader from "../components/FileDownload";

import "../CSS/DataPanel.css";


/**
 * 
 * NOTE: Datapanel.js is now retired, all functionalities is now refactored to the specific views
 * In this case, home.js
 * 
 * Lam Nguyen
 * 
 * 
 */

class DataPanel extends React.Component {
    render() {
        return (
        <div id="DataPanel-Container">
            <div id="Excel-Container">
                <div id="padded-text">
                    <h1>Excel Files Input</h1>
                    <p>File extensions supported: .xls, .xlsx, .xlsm, .xltx, xltm</p>
                    <SheetJSApp />
                    <RequestServer />
                </div>
            </div>
            <div id="ical-Container">
                <div id="padded-text">
                    <h1>ICal Files Input</h1>
                    <p>File extensions supported: .ical</p>
                    <br/>
                    <FileUpload />
                    <br/>
                    <FileDownloader />
                </div>
            </div>
        </div>
        );
    }    
}
export default DataPanel;
