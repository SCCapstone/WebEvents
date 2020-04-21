import React from "react";
import ReactDOM from "react-dom";
import "./CSS/webevents-main.css";
import App from "./App"; // App.js
import * as serviceWorker from "./components/serviceWorker";

//THE main render call for the react app
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
	Test Commit from Lam Nguyen, 1/25/2020
	making sure I can make a pull/commit from Visual studio's from my fork repos
*/