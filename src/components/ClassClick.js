import React, { Component } from "react";

class ClassClick extends Component {

    clicked() {
        alert("Class Click happened!")
    }

    render() {
        return (
            <div>
                <button onClick={this.clicked}>Function Click Me</button>
            </div>
        )
    }
}

export default ClassClick