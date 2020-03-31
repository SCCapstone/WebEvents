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
         <div id="MainBody">
            <div id="MainBody-Left"></div>
               <div id="MainBody-Center">
                  <div id="padded-container-center">
                  <h1>Contact Us</h1>
                     <p>
                        Contact us page
                     </p>
                     <div className="column-padding"></div>
                  </div>
               </div>
               <div id="MainBody-Right"></div>
         </div>
      );
   }
}
 
export default ContactUs;
