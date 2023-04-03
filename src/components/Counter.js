import React, { Component } from "react";

class Counter extends Component{
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

    render(){
        return(
            <div>
                {this.props.render(this.state.counter, this.incrementCount)}
            </div>
        )
    }
}

export default Counter;