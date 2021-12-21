import React, { Component } from "react";
import { Routes, Route, Link} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <header className="header">
                <div className="nav">
                    <Link to="/" className="menu first">Ling's blog</Link>
                    <Link to="/tag" className="menu">Tags</Link>
                    <Link to="/portfolio" className="menu">Portfolio</Link>
                    <Link to="/about" className="menu">About</Link>
                    <Link to="/home" className="menu">Home</Link>
                </div>
                <div className="feature">
                    <h1>Ling &nbsp;&nbsp;Blog</h1>
                    <p>Loving traveling, love sharing</p>
                </div>
            </header>
        )
    }
}
export default Menu;