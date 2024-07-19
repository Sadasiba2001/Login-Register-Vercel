import React from 'react';
import style from './landing_page.module.css';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className={style.landing_page}>
            <div className={style.content}>
                <h1>Welcome to Our Website</h1>
                <button className={style.btn} onClick={handleLoginClick}>Login</button>
                <button className={style.btn} onClick={handleRegisterClick}>Register</button>
            </div>
        </div>
    );
};

export default LandingPage;