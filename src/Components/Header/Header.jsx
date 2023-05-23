import React from 'react'
import "./Header.css";
import Logo from "../../assets/logo.png";

const toggleMobileMenu = (menu) => {
    menu.classList.toggle('open');
  };

const Header = () => {
  return (
    <div className="header">
        <div className="innerHead">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar">
                <ul className="nav">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Technology</li>
                    <li>Education</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div id="hamburger-icon" onClick={(e) => toggleMobileMenu(e.target)}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <ul class="mobile-menu">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Technology</li>
                    <li>Education</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header