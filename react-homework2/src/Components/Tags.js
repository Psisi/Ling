import React, { Component } from "react";

class Tags extends Component {
    render() {
        return (
            <div className="tags">
                <hr/>
                <h3>Featured Tags</h3>
                <input type="text" name="fname" value={this.props.value}/>
                <br/><br/>
                <h3>About me</h3>
                <a href="#">
                    <img src={this.props.img}/>
                </a>
            </div>
        )
    }
}
export default Tags;