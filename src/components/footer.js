import React from "react";
import { BiCopyright } from "react-icons/bi";

const currentYear = new Date().getFullYear
function Footer(){
    return <footer>
        <p>Copyright<BiCopyright/> {currentYear}</p> 
        
    </footer>
}

export default Footer;