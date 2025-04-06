import React from "react";
import "./Inspire_trip.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Inspire_trip(){
    const inspire_trips = [
        {
            id:1,
            image:"/images/is1.webp",
            title: "The 6 best Orlando hotels for families",
            desc: "Discover the best Orlands hotels for families for your vacation."
        },
        {
            id:2,
            image:"/images/is2.webp",
            title: "5 best ski towns around the world",
            desc: "Discover a winter wonderland in these charming ski destinations"
        },
        {
            id:3,
            image:"/images/is3.webp",
            title: "5 vacation homes for a Thanksgiving getaway",
            desc: "Enjoy Thankgiving dinner at these vacation homes."
        },        {
            id:4,
            image:"/images/is4.webp",
            title: "6 incredible Bangkok rooftop bars",
            desc: "Amazing city views, cocktails, and world-class cuisine."
        }

    ];

    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
                responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return(
        <div className="inspire-trip">
            <div className="container">
                <h2>Get inspiration for your next trip</h2>
                    <Slider {...settings} className="inspire-trip-carousel">
                        {inspire_trips.map((inspire_trip) => (
                            <div className="inspire-trip-card" key={inspire_trip.id}>
                                <div className="inspire-trip-image">
                                    <img src={inspire_trip.image} alt={inspire_trip.title}/>
                                </div>
                                <h5>{inspire_trip.title}</h5>
                                <p className="inspire-trip-desc">{inspire_trip.desc}</p>
                            </div>
                        ))}
                    </Slider>
            </div>
        </div>
    );
}

export default Inspire_trip;