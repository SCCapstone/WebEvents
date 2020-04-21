import React, { Component } from 'react';
import "../CSS/webevents-main.css";


class Error extends Component {
   constructor(props) {
       super(props)
       this.state = {
         navbarClass: "error"
       }
     }

   render() {
    return (
      <div id="MainBody">
         <div id="MainBody-Left"></div>
            <div id="MainBody-Center">
               <div id="padded-container-center">
                  <h1>THERE WAS A PROBLEM</h1>
                  <p>Error: Page does not exist!</p>
                  <div className="column-padding"></div>
               </div>
            </div>
            <div id="MainBody-Right"></div>
         </div>

      );
   }
}
 
export default Error;