import React from 'react'
import Header from '../../Components/Header/Header';
import "./Hero.css";

const Hero = () => {
  return (
      <div className="hero">
        <Header/>
        <div className="innerHero">
            <div className="text">
                <div className="bigText">Welcome to Grace Hands Tech World, Where technology meets creativity!</div>
                <div className="smallText" data-text="&nbsp;We are thrilled to have you join us in the dynamic and ever-evolving world of technology.&nbsp;">
                &nbsp;We are thrilled to have you join us in the dynamic and ever-evolving world of technology.&nbsp;</div>
            </div>
        </div>
    </div>
  )
}

export default Hero