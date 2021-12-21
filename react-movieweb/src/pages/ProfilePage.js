import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { queryProfile } from "../slices/accountSlice";
import styles from './ProfilePage.module.css';


const ProfilePage = (props) => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(queryProfile());
    }, []);
    
    const profile = useSelector((state) => state.account.profile);
    const {firstName, lastName, gender, username} = profile;

    return (
        <div className = {styles.container}>
            <h2>个人信息</h2>
            <div>
                <p>姓：{lastName}</p>
                <p>名：{firstName}</p>
                <p>用户名：{username}</p>
                <p>性别：{gender}</p>
            </div>
        </div>
    )
}
export default ProfilePage;