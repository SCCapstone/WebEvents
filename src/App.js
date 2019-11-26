import React from "react";
import "./App.css";
import CSVImport from "./CSVImport";
import TitleBar from "./TitleBar";
import SheetJSApp from "./sheet";

const App = () => {
  return (
    <div className="App">
      <TitleBar />
          <SheetJSApp />
    </div>
  );
};

export default App;
