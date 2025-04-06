import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Trip.css";


function Trip() {

    const trips = [
        {
            id: 1,
            image: "/images/trip1.jpg",
            name: "Strabourg",
            distance: "6,198 km away"
        },
        {
            id: 2,
            image: "/images/trip2.jpg",
            name: "Colmar",
            distance: "6,233 km away"
        },

        {
            id: 3,
            image: "/images/trip3.jpg",
            name: "Dijon",
            distance: "6,417 km away"
        },

        {
            id: 4,
            image: "/images/trip4.jpg",
            name: "Lyon",
            distance: "6,459 km away"
        },
        {
            id: 5,
            image: "/images/trip5.jpg",
            name: "Avignon",
            distance: "6,497 km away"
        },
        {
            id: 6,
            image: "/images/trip6.jpg",
            name: "Lille",
            distance: "6,505 km away"
        },
        {
            id: 7,
            image: "/images/trip7.jpg",
            name: "Paris",
            distance: "6,586 km away"
        },
        {
            id: 8,
            image: "/images/trip8.jpg",
            name: "Rouen",
            distance: "6,665 km away"
        },
        {
            id: 9,
            image: "/images/trip9.jpg",
            name: "Toulouse",
            distance: "6,769 km away"
        },
        {
            id: 10,
            image: "/images/trip10.jpg",
            name: "Bordeaux",
            distance: "6,894 km away"
        },
    ];

    const settings = {
        speed: 500,
        slidesToShow: 6,
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
    

    return (
        <div className="trip">
            <div className="container">
                <h2 className="trip-h">Quick and easy trip planner</h2>
                <p className="trip-p">Pick a vibe and explore the top destinations in France</p>
                <div className="trip-nav">
                    <button className="trip-nav-b"><img src="/images/t3.png" alt="City" className="trip-img" />City</button>
                    <button className="trip-nav-b"><img src="/images/t1.png" alt="Beach" className="trip-img" />Beach</button>
                    <button className="trip-nav-b"><img src="/images/t4.png" alt="Ski" className="trip-img" />Ski</button>
                    <button className="trip-nav-b"><img src="/images/t6.png" alt="Outdoors" className="trip-img" />Outdoors</button>
                    <button className="trip-nav-b"><img src="/images/t5.png" alt="Relax" className="trip-img" />Relax</button>
                    <button className="trip-nav-b"><img src="/images/t2.png" alt="Romance" className="trip-img" />Romance</button>
                    <button className="trip-nav-b"><img src="/images/t7.png" alt="Food" className="trip-img" />Food</button>
                </div>
                <Slider {...settings} className="trip-carousel">
                    {trips.map((trip) => (
                        <div className="trip-card" key = {trip.id}>
                            <div className="trip-image">
                                <img src={trip.image} alt={trip.name} />
                            </div>
                            <h5>{trip.name}</h5>
                            <p className="trip-dis">{trip.distance}</p>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    );
}

export default Trip;