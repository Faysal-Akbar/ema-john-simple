import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register</h2>
                <form onSubmit="">
                    <input type="text" placeholder="Name"></input><br/>
                    <input type="email" placeholder="Email"></input><br/>
                    <input type="password" placeholder="password"></input><br/>
                    <input type="password" placeholder="re-enter password"></input><br/>
                </form>
                <p>already register? <Link to="/login">login</Link></p>
                <div>............Or..............</div><br/>
                <button className="regular-button">Google sign In</button>
            </div>
        </div>
    );
};

export default Register;