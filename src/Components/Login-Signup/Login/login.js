import React, { useState } from 'react';
import style from './login.module.css';
import email from '../../Assets/email.png';
import password from '../../Assets/password.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginemail, setLoginemail] = useState('');
    const [loginpassword, setLoginpassword] = useState('');
    
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
    };
    const handleRegisterClick = () => {
        navigate('/register');
    };
    
    const formSubmit = async (event) => {
        event.preventDefault();
        const loginData = { loginemail, loginpassword };
        console.log('Login data:', loginData);
        try {
            const storedDataString = JSON.parse(localStorage.getItem(loginemail));
            console.log('Stored data is:', storedDataString);
            if (!storedDataString) {
                alert('Email does not exist.');
                navigate('/register');
                return;
            }
            else {
                console.log('Stored data is:', storedDataString);
            }

            if (storedDataString.userpassword === loginpassword) {
                alert('Login successful');
                navigate('/');
            } 
            else {
                alert("Password doesn't match");
                navigate('/login');
            }
        } 

        catch (error) {
            console.error('Error during login process:', error);
            alert('An error occurred during login. Please try again.');
            navigate('/login');
        }

        setLoginemail('');
        setLoginpassword('');
    };

    return (
        <div className={style.container}>
            <button className={style.homeButton} onClick={handleHomeClick}>Home</button>
            <div className={style.header}>
                <div className={style.text}>Login</div>
                <div className={style.underline}></div>
                <form onSubmit={formSubmit}>
                    <div className={style.inputs}>
                        <div className={style.input}>
                            <img src={email} alt="Email Icon" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                id="useremail"
                                value={loginemail}
                                onChange={(event) => setLoginemail(event.target.value)}
                                required
                            />
                        </div>
                        <div className={style.input}>
                            <img src={password} alt="Password Icon" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                id="userpassword"
                                value={loginpassword}
                                onChange={(event) => setLoginpassword(event.target.value)}
                                required
                            />
                        </div>
                        <div className={style.forgot_password}>
                            Don't have an account? <span onClick={handleRegisterClick}>Click Here!</span>
                        </div>
                        <div className={style.submit_container}>
                            <button className={style.submit} type="submit">
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
