import React, { Component } from "react";
//import "./CSS/Options.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

class Options extends Component {



    render() {

        //place holder function for options
        const transportValue = (value) => {
            
        }
        
        //options dropdown-button
        return(
            
          <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Group Amount
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={transportValue(2)}>2 Person Group</Dropdown.Item>
                    <Dropdown.Item href="#/3-Person">3 Person Group</Dropdown.Item>
                    <Dropdown.Item href="#/4-Person">4 Person Group</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
        );
                   
    }
}

export default Options;

