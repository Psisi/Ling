import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router"
import { updateLoginStatus } from "../../slices/accountSlice";


const LogoutPage = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect (() => {
        localStorage.removeItem('maimiao-token');
        dispatch(updateLoginStatus(false));
        navigate('/login');
    }, []);

    return (
        <div />
    )
}
export default LogoutPage;