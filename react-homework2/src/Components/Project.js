import React, { Component } from "react";

class Project extends Component {
    render() {
        return (
            <div className="list">
                <h2>{this.props.topic}</h2>
                <p>{this.props.intro}</p>
                <p>
                    <i>{this.props.content}</i>
                </p>
                <p>
                    <i>{this.props.date}</i>
                </p>
                    
            </div>
        )
    }
}
export default Project;