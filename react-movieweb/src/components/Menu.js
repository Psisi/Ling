import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

class Menu extends Component {
    render() {
      return (
        <div>
          <nav className={styles.menu}>
            <Link to="/">首页</Link>
            <Link to="/about">关于麦苗</Link>
            <Link to="/login">登录</Link>
          </nav>
        </div>
      )
    }
  }
  
  export default Menu;