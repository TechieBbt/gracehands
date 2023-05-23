import React, { Component } from "react";
import Slider from "react-slick";
import "./Services.css";

export default class Services extends Component{
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 3,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 5000,
            cssEase: "linear",
          

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <div className="services">
        <div className="innerServ">
            <div className="headServ">
                <span className="head1">Our Services </span>
                <span className="head2">Name the Service, We Offer It!</span>
                <span className="head3">In our Tech World, we have available for you an array of technological services as well as professionals that can help you with efficient service.</span>
            </div>
            <Slider {...settings} className="cardServ">
                <div className="cards-s">
                    <div className="card1">
                        <div className="cardText">
                            <span className="cardText-a">
                            Web Development
                            </span>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <span className="cardText-bb">
                                Grace Hands is a web development company that specializes in creating high-quality, custom websites for businesses of all sizes. 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards-s">
                    <div className="card2">
                        <div className="cardText">
                            <span className="cardText-a">
                            Graphics Design
                            </span>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <span className="cardText-bb">
                                Grace Hands Graphic Design is a creative design studio that specializes in providing a wide range of graphic design services. 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards-s">
                    <div className="card3">
                        <div className="cardText">
                            <span className="cardText-a">
                            Video Editing
                            </span>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <span className="cardText-bb">
                                Grace Hands is a professional video editing service that provides high-quality video editing services to clients.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards-s">
                    <div className="card4">
                        <div className="cardText">
                            <span className="cardText-a">
                            Content Writing
                            </span>
                            <div className="cardTextb">
                                <div className="bullet"></div>
                                <span className="cardText-bb">
                                Grace Hands is a talented content writer who has built a reputation for delivering high-quality content across a range of topics and industries. 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}
}
