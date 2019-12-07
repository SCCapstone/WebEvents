import React from "react";
import "./App.css";
import TitleBar from "./TitleBar";
import SheetJSApp from "./sheet";
import RequestServer from "./RequestServer";
import FileUpload from "./FileUpload";
import Options from "./Options";

const App = () => {
  return (
    <div className="App">
          <TitleBar />
          <Options />
          <SheetJSApp />
          <RequestServer />
          <FileUpload />
          
    </div>
  );
};

export default App;
