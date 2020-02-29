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
                     <p>About US page body content</p>
                     <div className="column-padding"></div>
                  </div>
               </div>
               <div id="MainBody-Right"></div>
         </div>
      );
   }
}
 
export default About;
