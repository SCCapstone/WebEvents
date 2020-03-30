import React from "react";
import Form from 'react-bootstrap/Form';
//import Checkbox from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';



class SchedulerOptions extends React.Component{

    sendData = () => {
        this.props.parentCallback("Hey Popsie, How�s it going?");
    };

    //todo
    //add groupsize 5-12 
    //add duplicants True or False ie checkbox

    constructor(props){
        super(props);
        //this.set2 = this.set2.bind(this);
        this.state = {
            dupes: false,
        };
      /*  this.handleChangeOnGroup = this.handleChangeOnGroup.bind(this);
        handleChangeOnGroup(e)
        {
            this.props.setState(e.target.groupsize);
        } */
    }

    allowDupes = () => {
        this.setState({dupes: !this.state.dupes});
        console.log(this.state.dupes);
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
        
                        <Dropdown.Item onClick = {() => this.props.onClick(2)}>Group of 2 </Dropdown.Item>
                        <Dropdown.Item onClick = {() => this.props.onClick(3)}>Group of 3 </Dropdown.Item>
                        <Dropdown.Item onClick = {() => this.props.onClick(4)}>Group of 4 </Dropdown.Item>
                        <Dropdown.Item onClick = {() => this.props.onClick(5)}>Group of 5 </Dropdown.Item>
                        <Dropdown.Item onClick = {() => this.props.onClick(6)}>Group of 6 </Dropdown.Item>
                        <Dropdown.Item onClick = {() => this.props.onClick(7)}>Group of 7 </Dropdown.Item>
                        <Dropdown.Item onClick = {() => this.props.onClick(8)}>Group of 8 </Dropdown.Item>
                        <Dropdown.Item onClick = {() => this.props.onClick(9)}>Group of 9 </Dropdown.Item>
                        <Dropdown.Item onClick = {() => this.props.onClick(10)}>Group of 10 </Dropdown.Item>
                        
                        { /*console.log(this.state.groupsize)*/}
                    </DropdownButton>
                                            )
                            )
                } 
                </ButtonToolbar>
                {this.state.groupsize}


                { /*
                Refactoring Successful 
                Lam Nguyen
                2020-03-29 1858
                Removed the following line creating the secondary upload
                */}

            </div>
            
        );

        
    };

}

export default SchedulerOptions;