import React, { Component } from "react";
import SchedulerType from "./SchedulerType";
import Form from 'react-bootstrap/Form';
//import Checkbox from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';





class SchedulerOptions extends React.Component{
    //todo
    //add groupsize 5-12 
    //add duplicants True or False ie checkbox

    constructor(props){
        super (props);
        this.state = {
            dupes: false,
            groupsize: 0,     
        };

    }

    allowDupes = () => {
        this.setState({dupes: !this.state.dupes});
        console.log(this.state.dupes);
    }

    set2 = () => {
        this.setState({groupsize: 2});
    //    console.log(this.state.groupsize);
    }
    set3 = () => {
        this.setState({groupsize: 3});
    //    console.log(this.state.groupsize);
    }
    set4 = () => {
        this.setState({groupsize: 4});
    //    console.log(this.state.groupsize);
    }
    set5 = () => {
        this.setState({groupsize: 5});
    //    console.log(this.state.groupsize);
    }
    set6 = () => {
        this.setState({groupsize: 6});
    //    console.log(this.state.groupsize);
    }
    set7 = () => {
        this.setState({groupsize: 7});
    //    console.log(this.state.groupsize);
    }
    set8 = () => {
        this.setState({groupsize: 8});
    //    console.log(this.state.groupsize);
    }
    set9 = () => {
        this.setState({groupsize: 9});
    //    console.log(this.state.groupsize);
    }
    set10 = () => {
        this.setState({groupsize: 10});
    //    console.log(this.state.groupsize);
    }
    set11 = () => {
        this.setState({groupsize: 11});
    //    console.log(this.state.groupsize);
    }
    set12 = () => {
        this.setState({groupsize: 12});
    //    console.log(this.state.groupsize);
    }
    

    render(){
        //return( change
        return (
            <div>
            <Form>
                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Allow Multiple Events During One Timeslot?"
                onChange= {this.allowDupes}
                />

            </Form>

            <ButtonToolbar>
                {['down'].map(direction => (
                <DropdownButton
                    drop={direction}
                    variant="secondary"
                    title={` Group Size `}
                    id={`dropdown-button-drop-${direction}`}
                    key={direction}
                >
    
                    <Dropdown.Item onClick = {this.set2}>Group of 2 </Dropdown.Item>
                    <Dropdown.Item onClick = {this.set3}>Group of 3  </Dropdown.Item>
                    <Dropdown.Item onClick = {this.set4}>Group of 4  </Dropdown.Item>
                    <Dropdown.Item onClick = {this.set5}>Group of 5  </Dropdown.Item>
                    <Dropdown.Item onClick = {this.set6}>Group of 6  </Dropdown.Item>
                    <Dropdown.Item onClick = {this.set7}>Group of 7  </Dropdown.Item>
                    <Dropdown.Item onClick = {this.set8}>Group of 8  </Dropdown.Item>
                    <Dropdown.Item onClick = {this.set9}>Group of 9  </Dropdown.Item>
                    <Dropdown.Item onClick = {this.set10}>Group of 10  </Dropdown.Item>
                    <Dropdown.Item onClick = {this.set11}>Group of 11  </Dropdown.Item>
                    <Dropdown.Item onClick = {this.set12}>Group of 12  </Dropdown.Item>
   
                    
                    {console.log(this.state.groupsize)}
                </DropdownButton>
))} 
            </ButtonToolbar>
            </div>
        );

        
    };


}

export default SchedulerOptions;