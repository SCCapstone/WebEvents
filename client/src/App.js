import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Home style sheet.
import "./CSS/App.css";

/** MOVED IMPORTS TO views/Home.js
 * 02/29/20
 * Lam Nguyen
 * 
import TitleBar from "./TitleBar";
import SheetJSApp from "./sheet";
import RequestServer from "./RequestServer";
import FileUpload from "./FileUpload";
//import Options from "./Options";
import FileDownloader from "./FileDownload";
*/


/** 
 *  Our Views: Our webpages
 *  02/29/20
 *  Lam Nguyen
*/

import Home from './views/Home';
import About from './views/About';
import Error from './views/ErrorPage';
import UserInstructions from "./views/UserInstructions";

import TitleBar from "./components/TitleBar";
import Footer from "./components/Footer.js";

// TOOK OUT <OPTIONS /> from under div MainBody-Center
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <TitleBar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/About" component={About}/>
          <Route path="/instructions" component={UserInstructions}/>
          <Route component={Error}/>
        </Switch>
        <Footer />
      </div> 
    </BrowserRouter>
  );
};


export default App;


/**
 *    TAKEN OUT OF APP RETURN STATEMENT ABOVE
 *    02/29/20
 *    Lam Nguyen
 * 
 *     <div className="App">
          <TitleBar />
          <div id="MainBody">
              <div id="MainBody-Left"></div>
              <div id="MainBody-Center">
                  <SheetJSApp />
                  <RequestServer />
                  <FileUpload />
                  <FileDownloader />
                  <div className="column-padding"></div>
              </div>
              <div id="MainBody-Right"></div>
          </div>
    </div>
 */
