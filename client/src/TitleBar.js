import React, { Component } from "react";
import "./CSS/TitleBar.css";

import SchedulerType from "./SchedulerType";
import SchedulerOptions from "./SchedulerOptions";

class TitleBar extends Component {
  render() {
    return (
    <div>
        <div id="TopBar">
            <div id="TopBar-Logo">
                <img src="PlaceholderLogo.jpg" alt="Logo Failed to load" height="105" 
                        width="105" padding="10px">
                </img>
            </div>
            <div id="TopBar-Div1">
                <div id="TitleBar">
                    Web Events Scheduling
                </div>
                <div id="TopBar-SubText">
                Applied Algorithmic Approach to Schedule Making
                </div>
            </div>
            <div id="Options-container">
                <SchedulerType />
                <SchedulerOptions />
            </div>
        </div>
        <div id="GarnetHighlightBar"></div>
    </div>
    );
  }
}

export default TitleBar;