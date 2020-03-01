import React, { Component } from "react";
import "../CSS/Options.css";

class Options extends Component {

    render() {

        //place holder function for options
        const sayHello = () => {
            console.log("hello");
        }

        //options button
        return (
            <div className="Options">
                <button onClick={sayHello} type="Options" class="btn"> Options </button>
            </div>
        );
    }
}

export default Options;

// JavaScript source code
