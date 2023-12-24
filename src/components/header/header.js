import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1>Memories</h1>
      <nav className="navbar">
        <ul className="tabs" style={{listStyle:"none"}}>
          <li><a href="card" style={{textDecoration:"none"}}>Home</a></li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
