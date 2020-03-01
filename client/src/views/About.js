import React, { Component } from 'react';
 
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
