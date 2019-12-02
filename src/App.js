import React from "react";
import "./App.css";
import CSVImport from "./CSVImport";
import TitleBar from "./TitleBar";
import Options from "./Options";

const App = () => {
  return (
    <div className="App">
        <TitleBar />
        <Options />
        <CSVImport />
        
    </div>
  );
};

export default App;
