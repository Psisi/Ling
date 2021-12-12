import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../utils/anthentication';
import { useDispatch } from "react-redux";
import { updateLoginStatus } from "../../slices/accountSlice";
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [ errorMessage, setErroMessage ] = useState('');
    const useNameRef = useRef();
    const passwordRef = useRef();
    let navigate = useNavigate();

    const handleLogin = async () => {
        const username = useNameRef.current.value;
        const password = passwordRef.current.value;
        try {
            const res = await axios.post('http://localhost:5000/login', {
                username,
                password
            });
            const { token, id } = res.data;
            localStorage.setItem('maimiao-token', token);
            localStorage.setItem('maimiao-user-id', id);
            dispatch(updateLoginStatus(true));
            navigate('/'); 
        } catch(e) {
            setErroMessage(e.response.data.error)
        }
    }
    useEffect(() => {
        useNameRef.current.focus();
    },[]);
    useEffect(() => {
        if(isLoggedIn()) {
            navigate('/');
        }
    }, []);

    return (
        <div className = { styles.container}>
            <h2>登录</h2>
            <p className={styles.error}>{errorMessage}</p>
            <input ref = {useNameRef} name = 'usename' placeholder = '请输入用户名'></input>
            <input ref = {passwordRef} name = 'password' type = 'password' placeholder = '请输入密码'></input>
            <Link to = '/signup'>还没账号？点击注册</Link>
            <button onClick = {handleLogin}>提交</button>
        </div>
    )
}
export default LoginPage;