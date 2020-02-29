import React, { Component } from "react";
//import "./CSS/Options.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';



class SchedulerType extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            type: "",     
        };
        console.log("here");
        //this.type = this.setType.bind(this);
        //change
        
    }
    
    setType1 = () => {
       // this.setState(state => ({ type: "seminar"}));
        this.setState({type: "seminar"});
       // console.log(this.state.type)
    }
    setType2 = () => {
        // this.setState(state => ({ type: "seminar"}));
         this.setState({type: "field"});
        // console.log(this.state.type)
     }
     setType3 = () => {
        // this.setState(state => ({ type: "seminar"}));
         this.setState({type: "work"});
        // console.log(this.state.type)
     }
    

    render() {

        
       
        
        //options dropdown-button
        return(
        // Adjusts button to fall at right-handside, if no space on right falls left
            <ButtonToolbar>
                {['right'].map(direction => (
                <DropdownButton
                    drop={direction}
                    variant="secondary"
                    title={` Drop ${direction} `}
                    id={`dropdown-button-drop-${direction}`}
                    key={direction}
                >
                    
                    <Dropdown.Item onClick = {this.setType1}>Seminar Scheduler </Dropdown.Item>
                    
                    <Dropdown.Item onClick= {this.setType2}>Field Scheduler</Dropdown.Item>
                    
                    <Dropdown.Item onClick={this.setType3}>Work Scheduler</Dropdown.Item>
                    {console.log(this.state.type)}
                    </DropdownButton>
                ))} 
                
            </ButtonToolbar>
            
        );
             
       // console.log(this.props.type);
    };
    //console.log(this.state.type);
}
//console.log(this.state.type);

/*<DropdownButton id="dropdown-basic-button" title="Scheduler Type">
                    <Dropdown.Item href="#/Scheduler 1">Seminar Type</Dropdown.Item>
                    <Dropdown.Item href="#/Scheduler 2">Field Scheduler</Dropdown.Item>
                    <Dropdown.Item href="#/Scheduler 3">Something else</Dropdown.Item>
                </DropdownButton>*/



/*class GroupNumber extends React.Component{


    render() {
        return;
    };
}

<ButtonToolbar>
                {['right'].map(direction => (
                <DropdownButton
                    drop={direction}
                    variant="secondary"
                    title={` Drop ${direction} `}
                    id={`dropdown-button-drop-${direction}`}
                    key={direction}
                >

                    
                    <Dropdown.Item onClick = {this.state.type = "seminar"}>Seminar Type </Dropdown.Item>
                    
                    <Dropdown.Item href="#/Scheduler 2">Field Scheduler</Dropdown.Item>
                    <Dropdown.Item href="#/Scheduler 3">Something else</Dropdown.Item>
                    </DropdownButton>
                ))} 
                
            </ButtonToolbar>
*/
export default SchedulerType;
