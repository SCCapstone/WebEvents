import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import Error from "./ErrorPage";

//makes sure that the app renders without crashing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Error />, div);
  ReactDOM.unmountComponentAtNode(div);
});