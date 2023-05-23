import React from 'react'
import "./About.css";
import Woman from "../../assets/afrowoman.png";

const About = () => {
  return (
    <div className="about">
        <div className="inner-about">
            <div className="a-head">About Tech World </div>
            <div className="inner-a">
                <div className="left-a">
                    <div className="bigAbout">Accessible Designs. <br/>
                                Easy To Understand.</div>
                    <div className="smallAbout">
                        <div className="smallAbout-a">
                        At Grace Hands Tech World, we are passionate about providing exceptional tech solutions to help businesses thrive in the digital age. Our comprehensive range of services includes web development, graphic design, digital marketing, video editing, and content writing. We are your one-stop destination for all your technological needs.
                        </div>
                        <div className="smallAbout-b">
                            Explore our website to learn more about our services, view our portfolio, and get in touch with our team to discuss your specific needs. Let us be your partner in leveraging technology to achieve your business goals. Grace Hands Tech World: Where technology meets creativity!
                        </div>
                    </div>
                </div>
                <div className="right-a">
                    <div className="rectangles">
                        <div className="rect1">Want to build websites for your business?</div>
                        <div className="rect2">Where can i get relevant tools to Skill up?</div>
                        <div className="rect3">Where is my one stop for Educational Materials?</div>
                    </div>
                    <img src={Woman} alt="" />
                    <div className="underlay"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About