import React, { Component } from "react";

class Menu extends Component {
    render() {
        return (
            <header className="header">
                {/* <div className="nav">
                    <a href="#" className="menu first">Ling's blog</a>
                    <a href="#" className="menu">Tags</a>
                    <a href="#" className="menu">Portfolio</a>
                    <a href="#" className="menu">About</a>
                    <a href="#" className="menu">Home</a>
                </div> */}
                <div className="feature">
                    <h1>Ling &nbsp;&nbsp;Blog</h1>
                    <p>Loving coding, love sharing</p>
                </div>
            </header>
        )
    }
}
export default Menu;