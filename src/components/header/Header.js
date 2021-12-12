import React from "react";
import Menu from "./Menu";
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>麦苗</div>
            <Menu/>
        </div>
    )
}
export default Header;