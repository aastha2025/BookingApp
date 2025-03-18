import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Des2.css";

function Des2() {
    const des2 = [
        {
            id: 1,
            image: "/images/d3.jpg",
            name: "Mumbai",
            logo: ""
        },
        {
            id: 2,
            image: "/images/d4.jpg",
            name: "Chennai",
            logo: ""
        },
        {
            id: 3,
            image: "/images/d5.jpg",
            name: "Varanasi",
            logo: ""
      
        }
    ];

    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false
    };

    return (
        <div className="lower-des">
            <div className="container">
            <Slider {...settings} className="carousel3">
            {des2.map((des2) => (
                <div className="des1-card" key={des2.id}>
                    <div className="des1-image">
                        <img src={des2.image} alt={des2.name} />
                        <div className="des1-name">{des2.name}</div>
                    </div>
                </div>
            ))}
        </Slider>
            </div>
        </div>
       
    );
}

export default Des2;
