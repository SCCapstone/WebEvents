import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import About from "./About";

//makes sure that the app renders without crashing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<About />, div);
  ReactDOM.unmountComponentAtNode(div);
});