import React from 'react';
import styles from './Header.module.css';
import Menu from './Menu';

const Header = () => {
      
    return (
        <div className={styles.header}>
            <div className={styles.logo}>麦苗</div>
            <Menu />
        </div>
    )   
}
      
export default Header;
