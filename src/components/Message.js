import React, {Component} from "react";

class Message extends Component{

    constructor(){
        super()

        this.state = {
            message : "Older message"
        }
    }

    changeMessage(){
        this.setState({message : "Message has been changed!"})
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change message</button>
            </div>
        )
    }
}

export default Message