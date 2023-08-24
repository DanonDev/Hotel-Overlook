import React, { useState } from "react";
import { HeaderStyle } from "./headerStyled"
import img from "../../assets/images/logo.png"

const Header = ({activeLink, linckClicked}) =>{

    return (
        <HeaderStyle>
        <div className="navigation">
            <div className="logo">
                <img src={img}/>
            </div>
                <nav>
                    <ul>
                        <li><a className={activeLink === 'home' ? 'active' : ''} onClick={() => linckClicked('home')}>FORSIDE</a></li>
                        <li><a className={activeLink === "hotels" ? "active" : ""} onClick={() => linckClicked("hotels")}>HOTELLER & DESTINATIONER</a></li>
                        <li><a className={activeLink === "rooms" ? "active" : ""} onClick={() => linckClicked("rooms")}>VÆRELSER</a></li>
                        <li><a className={activeLink === "reservation" ? "active" : ""} onClick={() => linckClicked("reservation")}>RESERVATION</a></li>
                        <li><a className={activeLink === 'login' ? 'active' : ''} onClick={() => linckClicked('login')}>LOGIN</a></li>
                    </ul>
                </nav>
            </div>
        </HeaderStyle>
    )
}

export {Header}
