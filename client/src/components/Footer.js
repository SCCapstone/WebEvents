import React, { Component } from "react";
import "../CSS/Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          navbarClass: "Footer"
        }
    }    
    
    render() {

        // Footer Bar
        return (
            <div className="footer">
                <p>University of South Carolina Capstone | Web Events</p>
            </div>
        );
    }
}

export default Footer;