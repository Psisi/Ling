import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate  } from "react-router";
import { isLoggedIn } from "../utils/anthentication";
import styles from './SignupPage.module.css';

const SignupPage = () => {
    const [ errorMessage, setErrorMessage ] = useState('');
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const genderRef = useRef();

    let navigate = useNavigate();

    const handleSignup = async () => {
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const username = userNameRef.current.value;
        const password = passwordRef.current.value;
        const gender = genderRef.current.value;

        try {
            const res = await axios.post ('http://localhost:5000/signup', {
                username,
                password,
                firstName,
                lastName,
                gender
            });
            console.log(`Signup succeed: `, res);
            navigate('/login');
        } catch (e) {
            setErrorMessage(e.response.data.error)
        }
    }
    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/');
        }
    }, []);

    return (
        <div className = {styles.container}>
            <h1>注 册</h1>
            <p className = {styles.error}>{errorMessage}</p>
            <form>
                <div>
                    <input ref = {firstNameRef} name = 'firstname' placeholder = '名字'/>
                    <input ref = {lastNameRef} name ='lastname' placeholder = '姓' />
                </div>
                <div>
                    <input ref = {userNameRef} name = 'username' placeholder = '请输入邮箱' />
                </div>
                <div>
                    <input ref = {passwordRef} name = 'password' placeholder = '请输入密码' />
                </div>
                <div>
                    <input ref = {genderRef} name = 'gender' placeholder = '请输入性别' />
                </div>
            </form>
            <button onClick = {handleSignup}>提 交</button>
        </div>
    )
}
export  default SignupPage;