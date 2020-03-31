import React, { Component } from 'react';
import "../CSS/App.css";
import "../CSS/Home.css";

class About extends Component {
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
                  <h1>About US</h1>
                     <p>
                        Team Captain - Nate Zajac<br/>
                        Client Representative - Steven Edwards: coordinate with customer.<br/>
                        Repo Master - Jesse Estry: helps everyone setup their git.<br/>
                        Optimist - Justin Greer: keeps us working and assists were needed.<br/>
                        Editor - Luke Whittle: collect, assemble, edit, and format team reports for submission to instructor,
                                  project manager, and correct writing and grammar.<br/>
                        Design manager – Lam Nguyen: implements and manages the design of the website.<br/>

                        <br/>
                        
                        <h4>Project Description</h4>
                        We have created an app that will provide an optimal schedule of event attendees based on their mutual
                        preferences for dates and times. The app user would be the event organizer. Our app will have a web-page
                        take an input of an excel file that has scheduling preferences and output a schedule that has
                        scheduled clients based on their preferences. The target audience is event organizers who need to
                        schedule a lot of people in a set period of time while attempting to make event speakers happy with
                        their scheduled times.<br/>
                     </p>
                     <div className="column-padding"></div>
                  </div>
               </div>
               <div id="MainBody-Right"></div>
         </div>
      );
   }
}
 
export default About;
