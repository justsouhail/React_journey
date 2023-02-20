import React from "react";
import reactlogo from "../images/logo192.png"
export default function Navbar(){
    return (
        <nav className="nav-container">
           
                <img src= {reactlogo}
                className = 'logo'
                />
                <h1>ReactFact</h1>
           
                 <h2 >Reacy course</h2>
        
        </nav>

    )
}