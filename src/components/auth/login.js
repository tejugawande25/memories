import React, { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";


function Login(props) {

  const [signupUser, setSignupUser] = useState({
    fullname:"",
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    let name = e.target.name;
    let value = e.target.value;

    setSignupUser({
      ...signupUser,
      [name] : value,
    });
  };

  console.log(signupUser);

  const handleSignUp = () => {
    axios
      .post("http://localhost:8000/user/signup",{
        signupUser:signupUser
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        console.log("Hii")
      });
  };

  // console.log(props);
  return (
    <div className="login-wrapper">
      <div className="container">
        <h3> {props.islogin ? "LOGIN" : "SIGNUP"}</h3>
        {props.islogin ? (
          " "
        ) : (
          <div>
            <label>Full Name</label>
            <br></br>
            <br></br>
            <input type="text"  id="fullname" name="fullname" value={signupUser.fullname} onChange={handleInput}></input>
          </div>
        )}

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={signupUser.username}
          onChange={handleInput}
        ></input>

        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={signupUser.password}
          onChange={handleInput}
        ></input>
        <div className="remember-me">
          <input type="checkbox" id="checkbox"></input>
          <label id="check-box"> Remember Me!</label>
        </div>
        <button className="login-button" onClick={handleSignUp}>
          {props.islogin ? "LOGIN" : "SIGNUP"}
        </button>
        <a id="forgot-password" href="google.com">
          {props.islogin ? "forget password" : " "}
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
