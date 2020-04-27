import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import SheetJSApp from "./sheet";
import DragDropFile from "./sheet";
import DataInput from "./sheet";

//sheet.js classes
//SheetJSApp
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SheetJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//DragDropFile
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DragDropFile />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  
  //Data Input
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DataInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });




