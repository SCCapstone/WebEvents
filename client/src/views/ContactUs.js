import React, { Component } from 'react';
import "../CSS/App.css";
import "../CSS/Home.css";

class ContactUs extends Component {
   constructor(props) {
       super(props)
       this.state = {
         navbarClass: "About"
       }
     }    

   render() {
      return (
         <div>
            <div class="intro-banner img-cont">
               <img
               class="object-fit_cover"
               src="homepageBanner.jpg"
               alt="home-major-image-1"
               />
            </div>
            <div class="MainBody-inner center">
               <h1>Contact Us</h1>
               <p>
                  If you have any issues, contact us at <h6>webevents490@gmail.com </h6>
                  and we will respond as soon as possible
               </p>
               <div class = "links">
               <li><a href="https://github.com/SCCapstone/WebEvents">Our Github</a></li>
               <li><a href="https://capstone.cse.sc.edu/">USC Capstone Website</a></li>
               </div>
            </div>
         </div>
      );
   }
}
 
export default ContactUs;
