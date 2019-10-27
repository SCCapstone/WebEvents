import React from 'react';
declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

export class FinalApp extends React.Component {
    constructor(props) {
        super(props);
        // initialize state
        this.state = {
            goalWord: 'checking',
            rightLetters: '',
            wrongLetters: '',
            display: '********',
            value: '',
            preCheck: '',
            wordLength: 8
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onChangeText(event) {
        this.forceUpdate();
        var temp;
        temp = event.target.value;
        ReactDOM.render(this.state.rightLetters, document.getElementById('right'));
        ReactDOM.render(this.state.wrongLetters, document.getElementById('wrong'));
        ReactDOM.render(this.state.display, document.getElementById('progress'));
        this.setState({
            preCheck: temp
        });
        this.forceUpdate();
    }
    onClick(event) {
        this.forceUpdate();
        var temp = this.state.preCheck;
        this.checkLetter(temp);
        this.setState({
            value: temp,
            preCheck: ''
        });
        this.forceUpdate();
    }
    checkLetter(input) {
        this.forceUpdate();
        var i;
        var k = 0;
        for (i = 0; i < this.state.wordLength; i++) {
            if (input == this.state.goalWord.charAt(i)) {
                var j = this.state.rightLetters;
                j += input;
                this.setState({
                    rightLetters: j
                });
                k++;
                this.changeDisplay();
                this.checkWin();
                this.forceUpdate();
            }
        }
        if (k == 0) {
            var l = this.state.wrongLetters;
            l += input;
            this.setState({
                wrongLetters: l
            });
            this.checkLose();
            this.forceUpdate();
        }
        this.forceUpdate();
    }
    changeDisplay() {
        var i = this.state.display;
        var j;
        var k = '';
        for (j = 0; j < this.state.wordLength; j++) {
            if (i.charAt(j) == '*' && this.state.value == this.state.goalWord.charAt(j)) {
                k += this.state.value;
                this.forceUpdate();
            }
            else if (i.charAt(j) != '*') {
                k += i.charAt(j);
                this.forceUpdate();
            }
            else {
                k += '*';
                this.forceUpdate();
            }
        }
        this.setState({
            display: k
        });
        this.forceUpdate();
    }
    checkWin() {
        if (this.state.rightLetters.length == this.state.wordLength) {
            ReactDOM.render(<h1>You Win!!!</h1>, document.getElementById('win'));
        }
    }
    checkLose() {
        if (this.state.wrongLetters.length == 3) {
            ReactDOM.render(<h1>You Lose!</h1>, document.getElementById('win'));
        }
    }
    render() {
        return (
            <div id="work">
                <input type="text" onChange={this.onChangeText} value={this.state.preCheck} />
                <button onClick={this.onClick}>Check!</button>
            </div>
        );
    }

}

//This is to add a change

//Does this count as a change? --Nate
//Mess with this comment (messed with -- Steven)
//change # 3?
// Steven was here -- Steven

ReactDOM.render(<FinalApp />, document.getElementById('function'));