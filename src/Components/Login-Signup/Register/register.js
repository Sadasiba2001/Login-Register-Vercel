import React, { useState } from 'react';
import style from './register.module.css';
import email from '../../Assets/email.png';
import password from '../../Assets/password.png';
import person from '../../Assets/person.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');

    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
    };
    const handleLoginClick = () => {
        navigate('/login');
    };

    const [userpassword, setUserpassword] = useState('');

    const formSubmit = async (event) => {
        event.preventDefault();
        const userRecord = { username, useremail, userpassword };
        console.log('The user records:', userRecord);
        localStorage.setItem(useremail, JSON.stringify(userRecord));
        setUsername('');
        setUseremail('');
        setUserpassword('');
        alert('Registration successful!');
        navigate('/login');
    };

    return (
        <div className={style.container}>
            <button className={style.homeButton} onClick={handleHomeClick}>Home</button>
            <div className={style.header}>
                <div className={style.text}>Register</div>
                <div className={style.underline}></div>
                <form onSubmit={formSubmit}>
                    <div className={style.inputs}>
                        <div className={style.input}>
                            <img src={person} alt="" />
                            <input type="text" placeholder='enter your name' id="username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                required />
                        </div>
                        <div className={style.input}>
                            <img src={email} alt="" />
                            <input type="email" placeholder='enter your email' id="useremail"
                                value={useremail}
                                onChange={(event) => setUseremail(event.target.value)}
                                required />
                        </div>
                        <div className={style.input}>
                            <img src={password} alt="" />
                            <input type="password" placeholder='enter your password' id="userpassword"
                                value={userpassword}
                                onChange={(event) => setUserpassword(event.target.value)}
                                required />
                        </div>
                        <div className={style.forgot_password}>Already have an account? <span onClick={handleLoginClick}>Click Here!</span></div>
                        <div className={style.submit_container}>
                            <button className={style.submit} type='submit'>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;