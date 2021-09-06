import './register.scss';
import axios from 'axios';
import { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post('/auth/register', user);
                history.push('/login');
            } catch (error) {

            }
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">H2 Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on H2 Social
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="UserName"
                            className="loginInput"
                            required
                            ref={username}
                        />
                        <input
                            placeholder="Email"
                            className="loginInput"
                            type="eamil"
                            required
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            className="loginInput"
                            type="password"
                            required
                            ref={password}
                            minLength="6"
                        />
                        <input
                            placeholder="Password Again"
                            className="loginInput"
                            type="password"
                            required
                            ref={passwordAgain}
                        />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <Link to="/login" style={{ width: "100%", display: "flex", textDecoration: "none" }}>
                            <button className="loginRegisterButton">Log into Account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
