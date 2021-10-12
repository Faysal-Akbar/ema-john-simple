import React from 'react';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url);
        })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Your Email"></input><br/>
                    <input type="password" placeholder="Your Password"></input><br/>
                    <input type="submit" value="Submit"></input><br/>
                </form>
                <p>New to Ema-John?<Link to="/register">Create Account</Link></p>
                <div>...........Or.............</div><br/>
                <button 
                    className="regular-button"
                    onClick={handleGoogleSignIn}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;