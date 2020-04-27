import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import home from "./Home";

//makes sure that the app renders without crashing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<home />, div);
  ReactDOM.unmountComponentAtNode(div);
});