import React, { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Swal = require('sweetalert2')


function Login(props) {

  const navigate = useNavigate();

  const [signupUser, setSignupUser] = useState({
    fullname:"",
    username: "",
    password: "",
  });

  const[loginUser, setLoginUser] = useState({
    fullname:"",
    username:"",
    password:""
  })

  const handleInput = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    let name = e.target.name;
    let value = e.target.value;

    setSignupUser({
      ...signupUser,
      [name] : value,
    });
    setLoginUser({
      ...loginUser,
      [name]:value,
    })
  };

  console.log(signupUser);

  const handleLoginAlert = () =>{
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You are logged in successfully!",
      showConfirmButton: false,
      timer: 2000
    });  
  }

  const handleLogin = () =>{
    axios
    .post("http://localhost:8000/user/login",{
      loginUser:loginUser
    })
    .then((data) =>{
      console.log(data);
      handleLoginAlert();   
    })
    .catch((error) =>{
      console.log(error);
    })
  }


  const handleSignUp =() =>{
    axios
    .post("http://localhost:8000/user/signup",{
      signupUser:signupUser
    })
    .then((data) => {
      console.log(data);
      navigate('/dashboard')
    })
    .catch((err) => {
      console.log(err);
      console.log("Hii")
    })
  }



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
          type="text"
          name="password"
          id="password"
          value={signupUser.password}
          onChange={handleInput}
        ></input>
        <div className="remember-me">
          <input type="checkbox" id="checkbox"></input>
          <label id="check-box"> Remember Me!</label>
        </div>
        {props.islogin ? <button className="login-button" onClick={handleLogin}>
          LOGIN
        </button> :
        <button className="login-button" onClick={handleSignUp}>
        SIGNUP
      </button>}
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
