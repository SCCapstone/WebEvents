import React, { Component } from "react";
import "../CSS/TitleBar.css";
import Options from "./Options";
import Navigation from './NavigationBar';

class TitleBar extends Component {
  render() {
    return (
    <div>
        <div id="TopBar">
            <div id="TopBar-Logo">
                <img src="logo512.png" alt="Logo Failed to load" height="100" 
                        width="100">
                </img>
            </div>
            <div id="TopBar-Div1">
                <div id="TitleBar">
                    <img src="TitleText.png" alt="Logo Failed to load" height="120" 
                            width="600">
                    </img>
                </div>
            </div>
            <div id="Options-container">
                <Options />
            </div>
        </div>
        <Navigation />
    </div>
    );
  }
}

export default TitleBar;
