//This is a button with feature of hiding content
import React from 'react';
class Counter extends React.Component{
    render(){
        return (
            <div>
                <Button text="Hello from GFG"></Button>
            </div>
        )
    }
}

class Button extends React.Component {
    state = {
        textflag: false,
    }
     ToggleButton(){
        this.setState(
            {textflag: !this.state.textflag}
        );
     }

     render(){
        return (
            <div>
                <button onClick = {() => this.ToggleButton()}>
                    {this.state.textflag === false ? "Hide" : "Show"}
                </button>
                {!this.state.textflag && this.props.text}
            </div>
        )
     }
}

export default Counter;

// App.css 
// CSS for buttons 
//  button {
//  margin: 30px;
//  padding: 15px 30px;
//  font-size: 16px;
//  background-color: aqua;