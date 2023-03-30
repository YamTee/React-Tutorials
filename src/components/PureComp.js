import React, { PureComponent } from "react";

class PureComp extends PureComponent {
    render() {
        console.log("Pure component rendered")
        return (
            <div><h1>This is Pure Comp {this.props.name}</h1></div>
        )
    }
}

export default PureComp;