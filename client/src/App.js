import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Home style sheet.
import "./CSS/webevents-main.css";

/** 
 *  Our Views: Our webpages
 *  02/29/20
 *  Lam Nguyen
*/

import Home from './views/Home';
import About from './views/About';
import ContactUs from './views/ContactUs';
import Error from './views/ErrorPage';
import UserInstructions from "./views/UserInstructions";

import TitleBar from "./components/sitewide/TitleBar";
import Footer from "./components/sitewide/Footer.js";

// TOOK OUT <OPTIONS /> from under div MainBody-Center
const App = () => {
  return (
    <div>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        <meta name="description" content="website description"/>
        <meta name="author" content="Lam Nguyen"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/b22242fa13.js" crossorigin="anonymous"></script>
      </head>
      <BrowserRouter>
        <div>
          <TitleBar />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home} exact/>
            <Route path="/About" component={About}/>
            <Route path="/contact" component={ContactUs}/>
            <Route path="/instructions" component={UserInstructions}/>
            <Route component={Error}/>
          </Switch>
          <Footer />
        </div> 
      </BrowserRouter>
  </div>
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
