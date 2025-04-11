import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stay.css";


function Stay() {
    const stays = [
        {
            id: 1,
            image: "/images/stay1.jpg",
            title: "Bed and Breakfast",
            name: "Prince des carres",
            rating: "9.1",
            feedback: "Wonderful",
            review:"67 reviews",
            price: "Starting from",
            rupee: " 18,486"
        },
        {
            id: 2,
            image: "/images/stay2.jpg",
            title: "Bed and Breakfast",
            name: "Le patio d'olivier",
            rating: "9.6",
            feedback: "Exceptional",
            review:"56 reviews",
            price: "Starting from",
            rupee: " 18,339"
       },

        {
            id: 3,
            image: "/images/stay3.jpg",
            title: "Apartment",
            name: "LE CHANT DE LA RIVIERE",
            rating: "8.4",
            feedback: "Very Good",
            review:"5 reviews",
            price: "Starting from",
            rupee: " 15,230"
         },

        {
            id: 4,
            image: "/images/stay4.jpg",
            title: "Apartment",
            name: "Gite 4 etoiles dans le jura-Lagoon",
            rating: "9.3",
            feedback: "Wonderful",
            review:"26 reviews",
            price: "Starting from",
            rupee: " 42,660"
        },
        {
            id: 5,
            image: "/images/stay5.jpg",
            title: "Apartment",
            name: "Appartement au calmeau milieu di vignoble de Gigondas",
            rating: "8.8",
            feedback: "Excellent",
            review:"42 reviews",
            price: "Starting from",
            rupee: "32,834"
         },
        {
            id: 6,
            image: "/images/stay6.jpg",
            title: "Bed and Breakfast",
            name: "I'abreuvoir de riviere",
            rating: "9.3",
            feedback: "Wonderful",
            review:"18 reviews",
            price: "Starting from",
            rupee: "31,284"
         }
         ];

         const settings = {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };
        
    
        return (
            <div className="stay">
                <div className="container">
                    <h2>Looking for the perfect stay?</h2>
                    <p className="stay-p">Travelers with similar searches booked these properties</p>
                    <Slider {...settings} className="stay-carosuel">
                       {stays.map((stay) => (
                            <div className="stay-card" key={stay.id}>
                                <div className="stay-image">
                                    <img src={stay.image} alt={stay.name} />
                                </div>
                                <p className="stay-p1">{stay.title}</p>
                                <h5 className="stay-h">{stay.name}</h5>
                                <div className="stay-view">
                                    <span className="stay-view-btn">{stay.rating}</span>
                                    <span className="stay-view-p">{stay.feedback}</span>
                                    <span className="stay-view-review">{stay.review}</span>
                                </div>
                                <div className="stay-price">
                                    <span className="stay-price-p">{stay.price}</span>
                                    <span className="stay-rupee">{stay.rupee}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );

        }

        export default Stay;
