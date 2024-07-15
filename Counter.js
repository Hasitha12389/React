import React, {Component } from 'react';

class Counter extends Component {
    constructor(props){
            super(props);
            this.state = {
                count: 0
            };
        }

        componentDidMount(){
            this.interval = setInterval(() => {
                this.setState((prevState) => ({
                    count: prevState.count + 1
                }));
            },1000);
        }

        componentWillUnmount(){
            clearInterval(this.interval);
        }

        render() {
            return (
                <div className = "counter">
                    <h1>Counter: {this.state.count}</h1>
                </div>
            );
        }
    }

    export default Counter;

    /*   CSS 
    .counter {
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
} */