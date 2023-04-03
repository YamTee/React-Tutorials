import React, { Component } from "react";

class HoverCounter extends Component {
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
                <h2 onMouseOver={this.incrementCount}>Clicked {counter} times</h2>
            </div>
        )
    }
}

export default HoverCounter;