import React from "react";
import "./App.css";
import CSVImport from "./CSVImport";
import TitleBar from "./TitleBar";
import SheetJSApp from "./sheet";
import RequestServer from "./RequestServer";
import FileUpload from "./FileUpload";
import Options from "./Options";

const App = () => {
  return (
    <div className="App">
      <TitleBar />
          <CSVImport />
          <SheetJSApp />
          <RequestServer />
          <FileUpload />
          <Options />
    </div>
  );
};

export default App;
