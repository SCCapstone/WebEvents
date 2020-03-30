import React, { Component } from "react";
import "../../CSS/TitleBar.css";
import Navigation from './NavigationBar';

class TitleBar extends Component {
  render() {
    /**
     * Titlebar v2
     * Lam Nguyen
     * 2020-03-29
     */
    return (
        <div class="header">
            <div class="inner-header">
                <div class="logo-container">
                    <a href="home"><h1>Web<span> Events Scheduling </span></h1></a>
                </div>

                <ul class="basic-navigation">
                    <a href="home"><li>Home</li></a>
                    <a href="about"><li>About us</li></a>
                    <a href="instructions"><li>Instructions</li></a>
                    <a href="contact"><li>Contact us</li></a>
                </ul>
            </div>
            <div className="redLine" />
        </div>
    );

    /**
     * Retiring Titlebar v1
     * Lam Nguyen
     * 2020-03-29
     * 
     * return (
    <div>
        <div id="TopBar">
            <div id="TopBar-Logo">
                <img src="logo512.png" alt="Logo Failed to load" height="100" 
                        width="100" >
                </img>
            </div>
            <div id="TopBar-Div1">
                <div id="TitleBar">
                    <img src="TitleText.png" alt="Logo Failed to load" height="120" 
                            width="600" padding-right="50px">
                    </img>
                </div>
            </div>
            <div id="Options-container" text-align="center">
                TEST TEST TEST
            </div>
        </div>
        <Navigation />
    </div>
    );
    */
  }
  
}

export default TitleBar;
