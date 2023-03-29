import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'William',
            description : 'des1',
            topic : ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleDescriptionChange = event => {
        this.setState({
            description : event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        alert(`${this.state.username} ${this.state.description} ${this.state.topic}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </div>

                <div>
                    <label>Description</label>
                    <textarea value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vuew</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    } 
}

export default Form;