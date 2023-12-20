import React from "react";
import "./footer.css"

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer> 
            <p>Copyright © {currentYear}</p>
        </footer>
    );
} 
export default Footer;