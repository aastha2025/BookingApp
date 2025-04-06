import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Offers.css";

function Offers() {
    const coupons = [
        {
            id: 1,
            title: "Save on stays worldwide",
            description: "Start your year with an adventure, saving 15% or more with Early 2025 Deals.",
            image: "/images/offer1.jpeg",
            button: "Save 15% or more"
        },
        {
            id: 2,
            title: "Quick escape, quality time",
            description: "Save up to 20% with a Getaway Deal",
            image: "/images/offer2.jpeg",
            button: "Save on stays"
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true, // Enables previous and next arrows
        autoplay: true, // Enables automatic scrolling
        autoplaySpeed: 2000, // Moves to the next slide every 2 seconds

    };

    return (
        <div className="offer">
            <div className="container">
                <h2>Offers</h2>
                <p className="para">Promotions, deals, and special offers for you</p>
                <Slider {...settings} className="carousel">
                    {coupons.map((coupon) => (
                        <div className="coupon-card" key={coupon.id}>
                            <div className="coupon-content">
                                <h3>{coupon.title}</h3>
                                <p>{coupon.description}</p>
                                <button className="coupon-button">{coupon.button}</button> {/* New Button */}
                            </div>
                            <div className="coupon-image">
                                <img src={coupon.image} alt={coupon.title} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Offers;
