import React from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Login(props) {
  console.log(props);
  return (
    <div className="login-wrapper">
      <div className="container">
        <h3> {props.islogin ? "LOGIN" : "SIGNUP"}</h3>
        { props.islogin ? " ":
        <div>
        <label>Full Name</label><br></br><br></br>
        <input type="text" name="fullname" id="fullname"></input>
        </div>
        }
        <label>Username</label>
        <input type="text" name="username" id="username"></input>
        <label>Password</label>
        <input type="password" name="password" id="password"></input>
        <div className="remember-me">
          <input type="checkbox" id="checkbox"></input>
          <label id="check-box"> Remember Me!</label>
        </div>
        <button className="login-button">{props.islogin ? "LOGIN":"SIGNUP"}</button>
        <a id="forgot-password" href="google.com">
          {props.islogin ? "forget password":" "}
        </a>
        <div className="or">
          <span className="or-span">OR</span>
          <div className="icons">
            <div className="icon google-icon">
              <a href="https://www.google.com">
              <FontAwesomeIcon icon={faGoogle} color="blue" />
              </a>
            </div>
            <div className="icon facebook-icon">
              <FontAwesomeIcon icon={faFacebook} color="#6189bc" />
            </div>
            <div className="icon linkdin-icon">
              <FontAwesomeIcon icon={faLinkedin} color="#507abb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
