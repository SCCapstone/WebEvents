import React from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import HelloWorldList from "./HelloWorldList";
import TitleBar from "./TitleBar";

const App = () => {
  return (
    <div className="App">
      <TitleBar />
      <HelloWorldList />
    </div>
  );
};

export default App;
