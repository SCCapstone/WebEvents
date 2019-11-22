import React from "react";
import "./App.css";
import CSVImport from "./CSVImport";
import TitleBar from "./TitleBar";

const App = () => {
  return (
    <div className="App">
      <TitleBar />
      <CSVImport />
    </div>
  );
};

export default App;
