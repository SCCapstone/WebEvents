import React, { Component } from "react";
import "./CSS/Options.css";

class Options extends Component {

    render() {

        //place holder function for options
        const sayHello = () => {
            console.log("hello");
        }

        //options button
        return (
            <select>
                <option>Options</option> 
                <option value="2 Person Group">2 Person Group</option>
                <option value="3 Person Group">3 Person Group</option>
            </select>          
        );
    }
}

export default Options;

// JavaScript source code
