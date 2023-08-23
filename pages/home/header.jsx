import React, { useState } from "react";
import { HeaderStyle } from "./headerStyled"
import img from "../../src/assets/images/logo.png"

const Header = () =>{
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (className) => {
        setActiveLink(className);
      };

    return (
        <HeaderStyle>
        <div className="navigation">
            <div className="logo">
                <img src={img}/>
            </div>
                <nav>
                    <ul>
                        <li><a className={activeLink === "home" ? "active" : ""} onClick={() => handleLinkClick("home")}>FORSIDE</a></li>
                        <li><a className={activeLink === "hotels" ? "active" : ""} onClick={() => handleLinkClick("hotels")}>HOTELLER & DESTINATIONER</a></li>
                        <li><a className={activeLink === "rooms" ? "active" : ""} onClick={() => handleLinkClick("rooms")}>VÆRELSER</a></li>
                        <li><a className={activeLink === "reservation" ? "active" : ""} onClick={() => handleLinkClick("reservation")}>RESERVATION</a></li>
                        <li><a className={activeLink === "login" ? "active" : ""} onClick={() => handleLinkClick("login")}>LOGIN</a></li>
                    </ul>
                </nav>
            </div>
        </HeaderStyle>
    )
}

export {Header}
