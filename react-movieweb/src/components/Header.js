import React, { Component } from 'react';
import styles from './Header.module.css';
import Menu from './Menu';

class Header extends Component {
    
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.logo}>麦苗</div>
                <Menu />
            </div>
        )
    }
}
      
export default Header;
