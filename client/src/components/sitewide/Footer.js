import React, { Component } from "react";
import "../../CSS/Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          navbarClass: "Footer"
        }
    }    
    
    render() {
        /**
         * Footer v2
         * Lam Nguyen
         * 2020-03-29
         */
        return (
            <div class="footer">
                <div class="inner-footer">
                    <div class="logo-container">
                        <img src="logo512.png" alt="WebEvents Logo"/>
                    </div>

                    <div class="footer-third">
                        <h1>Follow us</h1>
                        <li><a><i class="fab fa-facebook-square"></i></a></li>
                        <li><a><i class="fab fa-twitter-square"></i></a></li>
                        <li><a><i class="fab fa-instagram-square"></i></a></li>
                        <li><a><i class="fab fa-linkedin"></i></a></li>

                        <span>
                            McNair Aerospace Center<br/>
                            1000 Catawba st. #1084<br/>
                            Columbia, SC 29210<br/>
                            (803) 777-9596 <br/>
                        </span>
                    </div>
                    <div class="footer-third">
                        <h1>More</h1>
                        <li><a>Our Team</a></li>
                        <li><a>Professor Jose Vidal</a></li>
                        <li><a>UofSC Capstone</a></li>

                    </div>
                    <div class="footer-third">
                        <h1>Need Help?</h1>
                        <li><a>Terms and conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="https://github.com/SCCapstone/WebEvents">Our Github</a></li>
                    </div>
                </div>
            </div>
        );

        /** Retired Footer Bar v1
         * Lam Nguyen
         * 2020-03-29
         * 
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
        );*/
    }
}

export default Footer;