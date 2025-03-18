import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Des1.css";

function Des1() {
    const des1 = [
        {
            id: 1,
            image: "/images/d1.jpg",
            name: "New Delhi",
            logo: ""
        },
        {
            id: 2,
            image: "/images/d2.jpg",
            name: "Bangalore",
            logo: ""
        }
    ];

    const settings = {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false
    };

    return (
        <div className="upper-des">
            <div className="container">
            <Slider {...settings} className="carousel2">
            {des1.map((des1) => (
                <div className="des-card" key={des1.id}>
                    <div className="des-image">
                        <img src={des1.image} alt={des1.name} />
                   <div className="des-name">{des1.name}</div>
                    </div>
                </div>
            ))}
        </Slider>
            </div>
        </div>
       
    );
}

export default Des1;
