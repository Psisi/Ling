import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    const { primary, onClick, children } = props;
    const themeClass = primary? styles.primary : styles.default;
    const btnClass = `${styles.button} ${themeClass}`;
    return (
        <span className = {btnClass} onClick= {onClick}>
            {children}
        </span>
    );   
}
export default Button;