import Switch from "react-switch";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Menu.module.css";
import { useSelector } from "react-redux";

const Menu = (props) => {
  const { theme, updateTheme } = useContext(ThemeContext);

  const handleChange = (checked) => {
    const currentTheme = checked? 'light': 'dark';
    updateTheme(currentTheme);
  }
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);

  return (
    <div>
      <nav className={styles.menu}>
        <Link to="/">首页</Link>
        <Link to="/about">关于麦苗</Link>
        {isLoggedIn && <Link to = "/profile">个人信息</Link>} 
        {isLoggedIn? <Link to="/logout">退出</Link> : <Link to="/login">登录</Link>}
            
        <Switch 
          width={70}
          onChange={handleChange}
          checked={theme === 'light'}
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                paddingRight: 2,
              }}
            >
              Dark
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 15,
                paddingRight: 2,
              }}
            >
              Light
            </div>
          }
        />
      </nav>
    </div>
  )
  
}
export default Menu;