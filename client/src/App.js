import React from "react";
import "./CSS/App.css";
import TitleBar from "./TitleBar";
import SheetJSApp from "./sheet";
import RequestServer from "./RequestServer";
import FileUpload from "./FileUpload";
//import Options from "./Options";
import FileDownloader from "./FileDownload";
//import 'bootstrap/dist/css/bootstrap.min.css';


// TOOK OUT <OPTIONS /> from under div MainBody-Cente
const App = () => {
  return (
    <div className="App">
          <TitleBar />
          <div id="MainBody">
              <div id="MainBody-Left"></div>
              <div id="MainBody-Center">
                  <SheetJSApp />
                  <RequestServer />
                  <FileUpload />
                  <FileDownloader />
                  <div className="column-padding"></div>
              </div>
              <div id="MainBody-Right"></div>
          </div>
    </div>
  );
};

export default App;