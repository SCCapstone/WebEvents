import React, { Component } from 'react';
 
class Instructions extends Component {
    constructor(props) {
        super(props)
        this.state = {
          navbarClass: "instructions"
        }
      }
    
    render() {
        return (
            <div id="MainBody">
            <div id="MainBody-Left"></div>
               <div id="MainBody-Center">
                  <div id="padded-container-center">
                    <h1>Instructions how to use Web Events Scheduling</h1>
                    <p>How to use: <br/>
                            To use this application, you must adhere to the folllowing steps:<br/>
                            -First, the file must be in the correct format of First name- 
                            Last name- preferences for all of the people<br/>
                            -Next, you must select the the scheduling type that you want to use<br/>
                            -After you select the type, you have to select the specific 
                            options for that type<br/>
                            -Finally, you will upload your file, and click the export file to 
                            download the finished schedule.<br/>
                      </p>
                    <div className="column-padding"></div>
                  </div>
               </div>
            <div id="MainBody-Right"></div>
            </div>
        );
    }  
}
 
export default Instructions;
