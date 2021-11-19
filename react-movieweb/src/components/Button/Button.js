import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
    render() {
        const { primary, onClick, children } = this.props;
        const themeClass = primary? styles.primary : styles.default;
        const btnClass = `${styles.button} ${themeClass}`;
        return (
            <span className = {btnClass} onClick= {onClick}>
                {children}
            </span>
        );
    }
}
export default Button;