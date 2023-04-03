import React, { Component } from "react";

class ClickCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }


    render() {
        const counter = this.state.counter;

        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {counter} times</button>
            </div>
        )
    }
}

export default ClickCounter;