import React, { Component } from "react";
import "./Options.css";

class Options extends Component {

    render() {

        //place holder function for options
        const sayHello = () => {
            console.log("hello");
            
        }

        //options button
        return (<div className="Options">
            <button onClick={sayHello}> Options </button>
          </div>
        );
    }
}

export default Options;

// JavaScript source code
