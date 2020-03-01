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
                <div id="footer-dual-columns">
                    <div>
                        <p>An open source CSCE490/492 Capstone Project</p>
                        <p> SC Capstone Github link: 
                        <a href="https://github.com/SCCapstone/">https://github.com/SCCapstone/WebEventss</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;