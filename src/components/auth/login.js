import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="container">
        <h3>LOGIN</h3>
        <label>Username</label>
        <input type="text" name="username" id="username"></input>
        <label>Password</label>
        <input type="password" name="password" id="password"></input>
        <div className="remember-me">
          <input type="checkbox" id="checkbox"></input>
          <label id="check-box"> Remember Me!</label>
        </div>
        <button>Login</button>
        <a id="forgot-password" href="google.com">
          Forgot Password?
        </a>
        <div className="or">
          <span className="or-span">Or</span>
          <div className="icons">
          <div className="icon google-icon" >
            <FontAwesomeIcon icon={faGoogle} color="blue" />
          </div>
          <div className="icon facebook-icon">
            <FontAwesomeIcon icon={faFacebook}  color="#6189bc"/>
          </div>
          <div className="icon linkdin-icon">
            <FontAwesomeIcon icon={faLinkedin} color="#507abb"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
