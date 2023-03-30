import React, { Component } from "react";

class RegularComp extends Component {
    render() {
        console.log("Regular component rendered")
        return (
            <div><h1>This is Regular Comp {this.props.name}</h1></div>
        )
    }
}

export default RegularComp;