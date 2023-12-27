import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1>Memories</h1>
      <nav className="navbar">
        <ul className="tabs" style={{listStyle:"none"}}>
          <li className="tabs-li"><a href="login" >Login</a></li>
          <li className="tabs-li"><a href="signup" >Signup</a></li>
          <li className="tabs-li"><a href="home" >Home</a></li>
          <li className="tabs-li"><a href="home" >Settings</a></li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
