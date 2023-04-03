import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {

    render() {
        const { counter, incrementCount } = this.props;

        return (
            <div>
                <button onClick={incrementCount}>Clicked {counter} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter);