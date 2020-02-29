import React, { Component } from 'react';
import "../CSS/TitleBar.css";

import { NavLink } from 'react-router-dom';
 
class Navigation extends Component {

   constructor(props) {
      super(props)
      this.state = {
        navbarClass: "navbar"
      }
    }

    setBgClass (title) {
      this.setState({
        navbarClass: `navbar navbar-${title}`
      })  
    }

   render() {
      return (
         <div className={this.state.navbarClass}>
            <div id="GarnetHighlightBar">
               <div className="v-center-bar">
                  <NavLink to="/" className="nav-item"
                  onClick={() => this.setBgClass('about')} 
                  href='/about/'>
                     HOME
                  </NavLink>
                   | 
                  <NavLink to="/about"
                  className="nav-item" 
                  onClick={() => this.setBgClass('services')} 
                  href='/about/'>
                     ABOUT
                  </NavLink>
                   | 
                  <NavLink to="/instructions"
                  className="nav-item" 
                  onClick={() => this.setBgClass('howtouse')} 
                  href='/instructions/'>
                     HOW TO USE
                  </NavLink>
                   | 
                  <NavLink to="/contact"
                  className="nav-item" 
                  onClick={() => this.setBgClass('Contact')} 
                  href='/contact/'>
                     CONTACT US
                  </NavLink>
               </div>
            </div>
         </div>
      );
   }
}
 
export default Navigation;