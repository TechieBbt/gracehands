import React from 'react'
import "./Footer.css";
import Footlogo from "../../assets/footlogo.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Call from "../../assets/Call.png";
import Send from "../../assets/Send.png";

const Footer = () => {
  return (
    <div className="footer">
        <div className="foot">
            <div className="left-foot">
                <div className="footlogo">
                    <img src={Footlogo} alt="" />
                </div>
                <div className="foottext">We are an Edu-Tech company driven by the passion to affect lives in the world of Education Technology. We have the best skilled professionals for all your works.</div>
                <div className="footmedia">
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="right-foot">
                <ul className="footlist-a">
                    <li><span className="ftlist-h">Explore</span></li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Terms & Condition</li>
                    <li>Privacy policy</li>
                </ul>
                <ul className="footlist-b">
                    <li><span className="ftlist-h">Services</span></li>
                    <li>Web</li>
                    <li>Graphics</li>
                    <li>Content Writing</li>
                    <li>Marketing</li>
                </ul>
                <ul className="footlist-c">
                    <li><span className="ftlist-h">Courses</span></li>
                    <li>SSPS</li>
                    <li>Data Analysis</li>
                    <li>Research Analysis</li>
                </ul>
                <div className="footlist-d">
                    <span className="ftlist-dh">Address</span>
                    <div className="send">
                        <img src={Call} alt=""/>
                        <span id="info"> +234 816 818 1969</span>
                    </div>
                    <span id="infoo">Gracehands123@gmail.com</span>
                    <div className="send">
                        <img src={Send} alt=""/>
                        <span id="info"> OAU, new market, Zone E, block 4.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer