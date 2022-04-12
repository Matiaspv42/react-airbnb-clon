import React from "react";
import airLogo from '../images/airbnb-logo.png'
import '../style.css'

export default function Navbar(){
    return(
        <nav>
            <img src={airLogo} alt="airbnb logo" className="logo"/>
        </nav>
    )
}